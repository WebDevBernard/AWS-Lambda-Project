import { Line } from "react-chartjs-2";
import classes from "./Chart.module.css";
export default function Chart({ loadData }) {
  //  <========= Required Change Starts Here: =========>
  const season = 2;

  const startDate = 19;
  //  <========= Required Change Ends Here: =========>
  // finds the current season
  const filterSeason = loadData.filter((item) => {
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
    return arr;
  };
  // removes all NaN, and negative numbers in array
  const formatSchedule = () => {
    let arr = [];
    const schedule = scheduleCalculate();
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
      arr.push(`Week ${startDate + i + 1}`);
    }
    return arr;
  };

  const affixObject = filterSeason[0].affixes;
  const putAffixInArray = () => {
    let arr = [];
    for (let i = 0; i < scheduleCalculate().length; i++)
      for (let j = 0; j < affixObject.length; j++) {
        arr.push(affixObject[j]);
      }
    return arr;
  };

  const renderAffixList = () => {
    let arr = [];
    for (let i = 0; i < formatSchedule().length; i++) {
      arr.push(`Week ${startDate + i + 1} ${putAffixInArray()[startDate + i]}`);
    }
    return arr;
  };
  console.log(renderAffixList());
  const data = {
    labels: labelLength(),
    datasets: [
      {
        data: formatSchedule(),
        fill: true,
        borderColor: "deeppink",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `World of Warcraft Shadowlands Mythic+ Season ${season}`,
        tooltip: {
          enabled: false,
          position: "nearest",
          // external: externalTooltipHandler,
        },
      },
    },
  };
  const legend = {};
  const generateKey = (pre) => {
    return `${Math.random()}_${new Date().getTime()}`;
  };

  return (
    <>
      <Line className={classes.chart} options={options} data={data} />
      <ul>
        {renderAffixList().map((list) => (
          <li key={generateKey(list)}>{list}</li>
        ))}
      </ul>
    </>
  );
}
