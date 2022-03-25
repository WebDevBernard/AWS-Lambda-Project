import { FC } from "react";
import classes from "./Header.module.css";
import moment from "moment";
import { IProps } from "../../store/interface";

const Header: FC<{
  season: number;
  expansionName: string;
  counterData: IProps[];
}> = ({ season, expansionName, counterData }) => {
  // https://codereview.stackexchange.com/questions/33527/find-next-occurring-friday-or-any-dayofweek
  const today = new Date();
  function setDay(date: Date, dayOfWeek: number) {
    const resultDate = new Date(date.getTime() - 8 * 1000 * 60 * 60);
    resultDate.setDate(
      date.getDate() + ((7 + dayOfWeek - date.getDay() - 1) % 7) + 1
    );
    return resultDate;
  }
  // calculates difference of current week and previous week. Returns 0 for the first week
  const difference =
    counterData.length > 1
      ? counterData.slice(-2).reduce((prev, curr) => curr["total"] - prev, 0)
      : 0;

  const secondLast =
    counterData.length > 1 ? counterData.slice(-2, -1)[0].total : 1;

  const percentage = Math.round((difference / secondLast) * 100);

  function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className={classes.header}>
      <div className={classes.container}>
        <img
          src="https://img.icons8.com/color/48/000000/world-of-warcraft.png"
          alt="warcraft icon"
        />
        <p className={classes.title}>WoW Mythic+ Player Count</p>
      </div>

      <div className={classes.container}>
        <span className={classes.season}>
          {expansionName.toUpperCase()} Season {season}
        </span>
        <p className={classes.update}>
          Next update {moment(setDay(today, 5)).format("MMMM Do YYYY")} 12:00PM
          PST
        </p>
      </div>
      <p className={classes.description}>
        Data comes from Raider.io API. Based on total number of characters who
        have completed a Mythic+ Dungeon.
      </p>

      <div className={classes.counter}>
        <h2>Change from Previous Week</h2>
        <span>
          {difference > 0 ? (
            <svg
              className={classes.positive}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 11l5-5m0 0l5 5m-5-5v12"
              />
            </svg>
          ) : (
            <svg
              className={classes.negative}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 13l-5 5m0 0l-5-5m5 5V6"
              />
            </svg>
          )}
          {numberWithCommas(difference)} | {percentage}%
        </span>
      </div>
    </div>
  );
};

export default Header;
