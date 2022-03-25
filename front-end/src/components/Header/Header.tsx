import { FC } from "react";
import classes from "./Header.module.css";
import moment from "moment";

const Header: FC<{ season: number; expansionName: string }> = ({
  season,
  expansionName,
}) => {
  // https://codereview.stackexchange.com/questions/33527/find-next-occurring-friday-or-any-dayofweek
  const today = new Date();
  function setDay(date: Date, dayOfWeek: number) {
    const resultDate = new Date(date.getTime() - 8 * 1000 * 60 * 60);
    resultDate.setDate(
      date.getDate() + ((7 + dayOfWeek - date.getDay() - 1) % 7) + 1
    );
    return resultDate;
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
    </div>
  );
};

export default Header;
