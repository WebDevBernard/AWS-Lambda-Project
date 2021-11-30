import { Line } from "react-chartjs-2";
import List from "./List";
import classes from "./Chart.module.css";
import "chartjs-plugin-datalabels";
import { Chart as Chartjs } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chartjs.register(ChartDataLabels);
export default function Chart({
  loadData,
  season,
  expansionName,
  startWeek,
  pageCount,
}) {
  // finds the current expansion and season
  const filterSeason = loadData
    .filter((item) => {
      return item.expansion === expansionName;
    })
    .filter((item) => {
      return item.season === season;
    });

  // finds the current cycle
  const minCycle = (week) =>
    filterSeason.filter((item) => {
      return item.week <= week;
    });
  const maxCycle = (week) =>
    filterSeason.filter((item) => {
      return item.week >= week;
    });
  // finds the current week and affix
  const filterAffix = (currentWeek, currentRotation) =>
    filterSeason
      .filter((item) => {
        return item.week === currentWeek;
      })
      .map((item) => {
        return item.rotation[currentRotation];
      });

  // calculates the weekly total # of players
  const scheduleCalculate = () => {
    let arr = [];
    if (minCycle(12)) {
      for (let j = 1; j <= 12; j++) {
        arr.push(parseInt(filterAffix(j, j)));
      }
    }
    if (maxCycle(12) && minCycle(24)) {
      for (let k = 13; k <= 24; k++) {
        arr.push(filterAffix(k, k - 12) - filterAffix(k - 12, k - 12));
      }
    }
    if (maxCycle(24) && minCycle(36)) {
      for (let l = 25; l <= 36; l++) {
        arr.push(
          filterAffix(l, l - 24) -
            filterAffix(l - 12, l - 12) -
            filterAffix(l - 24, l - 24)
        );
      }
    }
    if (maxCycle(36) && minCycle(48)) {
      for (let m = 37; m <= 48; m++) {
        arr.push(
          filterAffix(m, m - 36) -
            filterAffix(m - 12, m - 12) -
            filterAffix(m - 24, m - 24) -
            filterAffix(m - 36, m - 36)
        );
      }
    }
    if (maxCycle(48) && minCycle(60)) {
      for (let m = 49; m <= 60; m++) {
        arr.push(
          filterAffix(m, m - 48) -
            filterAffix(m - 12, m - 12) -
            filterAffix(m - 24, m - 24) -
            filterAffix(m - 36, m - 36) -
            filterAffix(m - 48, m - 48)
        );
      }
    }
    return arr;
  };
  // multiply numbers by pageCount

  const formatPageCount = () => {
    let arr = [];
    const schedule = scheduleCalculate();
    for (const page of schedule) {
      arr.push(page * pageCount);
    }
    return arr;
  };

  // removes all NaN, and negative numbers in array
  const formatSchedule = () => {
    let arr = [];
    const schedule = formatPageCount();
    for (let i = 0; i < schedule.length; i++) {
      if (schedule[i] > 0) {
        arr.push(schedule[i]);
      }
    }
    return arr;
  };
  // conditionally renders more graph area
  const labelLength = () => {
    let arr = [];
    for (let i = 0; i < formatSchedule().length; i++) {
      arr.push(`Week ${startWeek + i}`);
    }
    return arr;
  };
  // repeats affix for each cycle depending on the schedule length
  const putAffixInArray = () => {
    const affixObject = filterSeason[0].affixes;
    const formatedLength = formatPageCount().length / 12;
    let arr = [];
    for (let i = 0; i < formatedLength; i++)
      for (let j = 0; j < affixObject.length; j++) {
        arr.push(affixObject[j]);
      }
    return arr;
  };

  const renderAffixList = () => {
    let arr = [];
    for (let i = 0; i < formatSchedule().length; i++) {
      arr.push(`${startWeek + i}-${putAffixInArray()[startWeek - 1 + i]}`);
    }
    return arr;
  };
  const ctx = document.getElementById("canvas").getContext("2d");
  const gradient = ctx.createLinearGradient(0, 0, 0, 693);
  gradient.addColorStop(0, "rgba(36, 81, 183, 0.45)");
  gradient.addColorStop(0.5, "rgba(36, 81, 183, 0.25)");
  gradient.addColorStop(1, "rgba(36, 81, 183, 0.05)");

  const tooltipText = putAffixInArray().map((list) => [
    `${list.split("-").slice(0, 5).join(", ")}`,
  ]);
  const chartColor = "#d2d1d6";
  const data = {
    labels: labelLength(),
    datasets: [
      {
        data: formatSchedule(),
        fill: true,
        tension: 0.4,
        backgroundColor: gradient,
      },
    ],
  };
  const options = {
    layout: {
      padding: {
        right: 40,
        left: 50,
      },
    },

    scales: {
      x: {
        ticks: {
          color: chartColor,
          font: {
            size: 14,
          },
        },
      },
      y: {
        display: false,
      },
    },
    responsive: true,

    plugins: {
      tooltip: {
        legend: {
          display: false,
        },
        backgroundColor: "rgba(49, 50, 82, 1)",
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.yLabel;
          },
          title: function (tooltipItem) {
            return tooltipItem[0].label;
          },
          afterLabel: function (tooltipItem) {
            return tooltipText[tooltipItem.label.split(" ")[1] - 1];
          },
        },
      },
      legend: {
        display: false,
      },
      datalabels: {
        display: true,
        anchor: "end",
        formatter: function (value, context) {
          return value.toLocaleString().replaceAll(" ", ", ");
        },
        color: chartColor,

        align: "end",
        labels: {
          title: {
            font: {
              size: 14,
            },
          },
        },
      },
      title: {
        color: chartColor,
        font: {
          weight: "light",
        },
        display: true,
        text: "This chart is not accurate. It is missing data from weeks 1 to 19.",
        tooltip: {
          enabled: false,
          position: "nearest",
          // external: externalTooltipHandler,
        },
      },
    },
  };
  return (
    <div className={classes.body}>
      <div className={classes.chart}>
        <Line style={{ height: "300px" }} options={options} data={data} />
      </div>

      <div className={classes.list}>
        <List renderAffixList={() => renderAffixList()} />
      </div>
    </div>
  );
}
