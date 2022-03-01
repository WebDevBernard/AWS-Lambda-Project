import { FC } from "react";
import classes from "./Header.module.css";

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
    <div id="top" className={classes.header}>
      <h1>
        <img
          src="https://img.icons8.com/color/48/000000/world-of-warcraft.png"
          alt="warcraft icon"
        />
        <p>
          {expansionName.toString().toUpperCase()} M+ S{season} Player Count
        </p>
      </h1>
      <span>
        Next update {setDay(today, 5).toISOString().slice(0, 10)} 12:00PM PST
      </span>
    </div>
  );
};

export default Header;
