import { FC } from "react";
import classes from "./Header.module.css";
import moment from "moment";
import { IProps } from "../../store/interface";
import * as _ from "lodash";

const Header: FC<{
  expansionTag: string;
  counterData: IProps[];
  handleChange: () => void;
  view: boolean;
}> = ({ expansionTag, counterData, handleChange, view }) => {
  // calculates date 1 week from today
  // https://codereview.stackexchange.com/questions/33527/find-next-occurring-friday-or-any-dayofweek
  const today = new Date();
  function setDay() {
    const resultDate = new Date(today.getTime() - 8 * 1000 * 60 * 60);
    resultDate.setDate(
      today.getDate() + ((7 + 5 - today.getDay() - 1) % 7) + 1
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

  const lastTotal = counterData.length > 1 ? counterData.slice(-1)[0].total : 0;

  const percentage = Math.round((difference / secondLast) * 100);

  // add commas to numbers
  function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // lodash find highest number and lowest weeks
  const min = _.minBy(counterData, function (o) {
    return o.total;
  });
  const max = _.maxBy(counterData, function (o) {
    return o.total;
  });

  return (
    <div className={classes.header}>
      <div className={classes.button}>
        <p
          className={!view ? classes.button__select : classes.button__unselect}
          onClick={handleChange}
        >
          Player Count
        </p>
        <p
          className={view ? classes.button__select : classes.button__unselect}
          onClick={handleChange}
        >
          Affixes Ranking
        </p>
      </div>
      <div className={classes.container}>
        <img
          src="https://img.icons8.com/color/48/000000/world-of-warcraft.png"
          alt="warcraft icon"
        />
        <p className={classes.title}>WoW Mythic+ Player Count</p>
      </div>
      <div className={classes.container}>
        <span className={classes.season}>{expansionTag}</span>
        <p className={classes.update}>
          Next update {moment(setDay()).format("MMMM Do YYYY")} 12:00PM PST
        </p>
      </div>
      <p className={classes.description}>
        The data comes from Raider.io API. It is a total (world) count of all
        characters who have completed a Mythic+ Dungeon.
      </p>
      <div className={classes.info__container}>
        <div className={classes.info}>
          <h2>Most Played Week</h2>
          <span>Week {max?.week || 0}</span>
          <span>{numberWithCommas(max?.total || 0)}</span>
          <h2>Affixes</h2>
          <span>{max?.affix.split("-").slice(0, 3).join(", ")}</span>
        </div>
        <div className={classes.info}>
          <h2>Least Played Week</h2>

          <span>Week {min?.week || 0}</span>
          <span>{numberWithCommas(min?.total || 0)}</span>
          <h2>Affixes</h2>
          <span>{min?.affix.split("-").slice(0, 3).join(", ")}</span>
        </div>
        <div className={classes.counter}>
          <h2>Total This Week</h2>

          <p className={classes.total}>{numberWithCommas(lastTotal)}</p>
          <h2>Change From Previous Week</h2>
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

      <div className={classes.disclaimer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        {view && (
          <span>
            <p>
              This table is the sum of all weeks with the same set of affixes.
            </p>

            <p>
              Rankings maybe higher simply because there are more players at the
              start of a season.
            </p>
          </span>
        )}
        {!view && (
          <span>
            <p>
              Since this chart is based on character count, and players can have
              multiple characters, it should only be used as an estimate.
            </p>
          </span>
        )}
      </div>
    </div>
  );
};

export default Header;
