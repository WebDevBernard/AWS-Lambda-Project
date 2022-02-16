import classes from "./Header.module.css";
export default function Header({ season, expansionName }) {
  // https://codereview.stackexchange.com/questions/33527/find-next-occurring-friday-or-any-dayofweek
  const today = new Date();
  function setDay(date, dayOfWeek) {
    const resultDate = new Date(date.getTime() - 8 * 1000 * 60 * 60);
    resultDate.setDate(
      date.getDate() + ((7 + dayOfWeek - date.getDay() - 1) % 7) + 1
    );
    return resultDate;
  }

  return (
    <div id="top" className={classes.header}>
      <h1 className={classes.title}>
        <img
          src="https://img.icons8.com/cotton/64/000000/sun--v3.png"
          alt="sun icon"
        />
        <p>
          {expansionName.toUpperCase()} M+ S{season} Player Count
        </p>
      </h1>
      <p>
        Next update {setDay(today, 5).toISOString().slice(0, 10)} 12:00PM PST
      </p>
    </div>
  );
}
