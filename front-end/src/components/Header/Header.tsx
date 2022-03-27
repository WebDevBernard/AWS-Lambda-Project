import { FC } from "react";
import { updateDate } from "../../utils/date";
import classes from "./Header.module.css";
import { IProps } from "../../store/interface";
import * as _ from "lodash";
import InfoWidget from "./InfoWidget";
import CounterWidget from "./CounterWidget";

const Header: FC<{
  expansionTag: string;
  counterData: IProps[];
  handleChange: () => void;
  view: boolean;
}> = ({ expansionTag, counterData, handleChange, view }) => {
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
        <p className={classes.update}>Next update {updateDate()} 12:00PM PST</p>
      </div>
      <p className={classes.description}>
        The data comes from Raider.io API. It is a count of all characters who
        have completed a Mythic+ Dungeon.
      </p>
      <div className={classes.info__container}>
        <InfoWidget counterData={counterData} />
        <CounterWidget counterData={counterData} />
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
              Rankings maybe higher simply because there are more players at the
              start of a season.
            </p>
          </span>
        )}
        {!view && (
          <span>
            <p>
              Since this chart is based on character count, it should only be
              relied on as an estimate of total number of players.
            </p>
          </span>
        )}
      </div>
    </div>
  );
};

export default Header;
