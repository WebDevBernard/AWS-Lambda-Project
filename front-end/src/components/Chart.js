import { Line } from "react-chartjs-2";
import classes from "./Chart.module.css";
export default function Chart({ loadData }) {
  // Required Change Season Here:
  const season = 2;

  // finds the current season, then the week and then current affix rotation
  const uglyFilter = (currentWeek, currentRotation) =>
    loadData
      .filter((item) => {
        return item.season === season;
      })
      .filter((item) => {
        return item.week === currentWeek;
      })
      .map((item) => {
        return item.rotation[currentRotation];
      });

  const week1 = parseInt(uglyFilter(1, 1));
  const week2 = parseInt(uglyFilter(2, 2));
  const week3 = parseInt(uglyFilter(3, 3));
  const week4 = parseInt(uglyFilter(4, 4));
  const week5 = parseInt(uglyFilter(5, 5));
  const week6 = parseInt(uglyFilter(6, 6));
  const week7 = parseInt(uglyFilter(7, 7));
  const week8 = parseInt(uglyFilter(8, 8));
  const week9 = parseInt(uglyFilter(9, 9));
  const week10 = parseInt(uglyFilter(10, 10));
  const week11 = parseInt(uglyFilter(11, 11));
  const week12 = parseInt(uglyFilter(12, 12));
  const week13 = uglyFilter(13, 1) - uglyFilter(1, 1);
  const week14 = uglyFilter(14, 2) - uglyFilter(2, 2);
  const week15 = uglyFilter(15, 3) - uglyFilter(3, 3);
  const week16 = uglyFilter(16, 4) - uglyFilter(4, 4);
  const week17 = uglyFilter(17, 5) - uglyFilter(5, 5);
  const week18 = uglyFilter(18, 6) - uglyFilter(6, 6);
  const week19 = uglyFilter(19, 7) - uglyFilter(7, 7);
  const week20 = uglyFilter(20, 8) - uglyFilter(8, 8);
  const week21 = uglyFilter(21, 9) - uglyFilter(9, 9);
  const week22 = uglyFilter(22, 10) - uglyFilter(10, 10);
  const week23 = uglyFilter(23, 11) - uglyFilter(11, 11);
  const week24 = uglyFilter(24, 12) - uglyFilter(12, 12);
  const week25 = uglyFilter(25, 1) - uglyFilter(13, 1) - uglyFilter(1, 1);
  const week26 = uglyFilter(26, 2) - uglyFilter(14, 2) - uglyFilter(2, 2);
  const week27 = uglyFilter(27, 3) - uglyFilter(15, 3) - uglyFilter(3, 3);
  const week28 = uglyFilter(28, 4) - uglyFilter(16, 4) - uglyFilter(4, 4);
  const week29 = uglyFilter(29, 5) - uglyFilter(17, 5) - uglyFilter(5, 5);
  const week30 = uglyFilter(30, 6) - uglyFilter(18, 6) - uglyFilter(6, 6);
  const week31 = uglyFilter(31, 7) - uglyFilter(19, 7) - uglyFilter(7, 7);
  const week32 = uglyFilter(32, 8) - uglyFilter(20, 8) - uglyFilter(8, 8);
  const week33 = uglyFilter(33, 9) - uglyFilter(21, 9) - uglyFilter(9, 9);
  const week34 = uglyFilter(34, 10) - uglyFilter(22, 10) - uglyFilter(10, 10);
  const week35 = uglyFilter(35, 11) - uglyFilter(23, 11) - uglyFilter(11, 11);
  const week36 = uglyFilter(36, 12) - uglyFilter(24, 12) - uglyFilter(12, 12);
  const week37 =
    uglyFilter(37, 1) -
    uglyFilter(25, 1) -
    uglyFilter(13, 1) -
    uglyFilter(1, 1);
  const week38 =
    uglyFilter(38, 2) -
    uglyFilter(26, 2) -
    uglyFilter(14, 2) -
    uglyFilter(2, 2);
  const week39 =
    uglyFilter(39, 3) -
    uglyFilter(27, 3) -
    uglyFilter(15, 3) -
    uglyFilter(3, 3);
  const week40 =
    uglyFilter(40, 4) -
    uglyFilter(28, 4) -
    uglyFilter(16, 4) -
    uglyFilter(4, 4);
  const week41 =
    uglyFilter(41, 5) -
    uglyFilter(29, 5) -
    uglyFilter(17, 5) -
    uglyFilter(5, 5);
  const week42 =
    uglyFilter(42, 6) -
    uglyFilter(30, 6) -
    uglyFilter(18, 6) -
    uglyFilter(6, 6);
  const week43 =
    uglyFilter(43, 7) -
    uglyFilter(31, 7) -
    uglyFilter(19, 7) -
    uglyFilter(7, 7);
  const week44 =
    uglyFilter(44, 8) -
    uglyFilter(32, 8) -
    uglyFilter(20, 8) -
    uglyFilter(8, 8);
  const week45 =
    uglyFilter(45, 9) -
    uglyFilter(33, 9) -
    uglyFilter(21, 9) -
    uglyFilter(9, 9);
  const week46 =
    uglyFilter(46, 10) -
    uglyFilter(34, 10) -
    uglyFilter(22, 10) -
    uglyFilter(10, 10);
  const week47 =
    uglyFilter(47, 11) -
    uglyFilter(35, 11) -
    uglyFilter(23, 11) -
    uglyFilter(11, 11);
  const week48 =
    uglyFilter(48, 12) -
    uglyFilter(36, 12) -
    uglyFilter(24, 12) -
    uglyFilter(12, 12);
  const week49 =
    uglyFilter(49, 1) -
    uglyFilter(37, 1) -
    uglyFilter(25, 1) -
    uglyFilter(13, 1) -
    uglyFilter(1, 1);
  const week50 =
    uglyFilter(50, 2) -
    uglyFilter(38, 2) -
    uglyFilter(26, 2) -
    uglyFilter(14, 2) -
    uglyFilter(2, 2);
  const week51 =
    uglyFilter(51, 3) -
    uglyFilter(39, 3) -
    uglyFilter(27, 3) -
    uglyFilter(15, 3) -
    uglyFilter(3, 3);
  const week52 =
    uglyFilter(52, 4) -
    uglyFilter(40, 4) -
    uglyFilter(28, 4) -
    uglyFilter(16, 4) -
    uglyFilter(4, 4);

  const graphArray = [
    week1,
    week2,
    week3,
    week4,
    week5,
    week6,
    week7,
    week8,
    week9,
    week10,
    week11,
    week12,
    week13,
    week14,
    week15,
    week16,
    week17,
    week18,
    week19,
    week20,
    week21,
    week22,
    week23,
    week24,
    week25,
    week26,
    week27,
    week28,
    week29,
    week30,
    week31,
    week32,
    week33,
    week34,
    week35,
    week36,
    week37,
    week38,
    week39,
    week40,
    week41,
    week42,
    week43,
    week44,
    week45,
    week46,
    week47,
    week48,
    week49,
    week50,
    week51,
    week52,
  ];

  const formatedArray = graphArray.filter((item) => item > 0);
  const labelLength = () => {
    let arr = [];
    for (let i = 0; i < formatedArray.length; i++) {
      arr.push(`Week ${19 + i + 1}`);
    }
    return arr;
  };
  console.log(formatedArray);
  const data = {
    labels: labelLength(),
    datasets: [
      {
        data: formatedArray,
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
  return (
    <>
      <Line className={classes.chart} options={options} data={data} />
    </>
  );
}
