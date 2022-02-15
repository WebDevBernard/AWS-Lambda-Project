import { Line } from "react-chartjs-2";
import Table from "../Table/Table";
import classes from "./Chart.module.css";
import "chartjs-plugin-datalabels";
import { Chart as Chartjs } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chartjs.register(ChartDataLabels);
export default function Chart({ chartData }) {
  const ctx = document.getElementById("canvas").getContext("2d");
  const gradient = ctx.createLinearGradient(0, 0, 0, 693);
  gradient.addColorStop(0, "rgba(36, 81, 183, 0.45)");
  gradient.addColorStop(0.5, "rgba(36, 81, 183, 0.25)");
  gradient.addColorStop(1, "rgba(36, 81, 183, 0.05)");

  const mappedWeek = chartData.map((item) => {
    return item.week;
  });
  const mappedData = chartData.map((item) => {
    return item.total;
  });
  const tooltipText = chartData.map(
    (item) => `${item.affix.split("-").slice(0, 3).join(", ")}`
  );
  const chartColor = "#d2d1d6";
  const data = {
    labels: mappedWeek,
    datasets: [
      {
        data: mappedData,
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
        text: "",
        padding: 24,
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
        <Table data={chartData} />
      </div>
    </div>
  );
}
