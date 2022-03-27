import classes from "./Header.module.css";
import { FC } from "react";
import { IProps } from "../../store/interface";
import { numberWithCommas } from "../../utils/format";

const CounterWidget: FC<{ counterData: IProps[] }> = ({ counterData }) => {
  // calculates difference of current week and previous week. Returns 0 for the first week
  const difference =
    counterData.length > 1
      ? counterData.slice(-2).reduce((prev, curr) => curr["total"] - prev, 0)
      : 0;

  const secondLast =
    counterData.length > 1 ? counterData.slice(-2, -1)[0].total : 1;

  const lastTotal = counterData.length > 1 ? counterData.slice(-1)[0].total : 0;

  const percentage = Math.round((difference / secondLast) * 100);
  return (
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
  );
};

export default CounterWidget;
