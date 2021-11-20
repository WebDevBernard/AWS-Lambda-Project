import classes from "./Header.module.css";

export default function Header({ season, expansionName, headerMessage }) {
  return (
    <div id="top" className={classes.header}>
      <h1 className={classes.title}>
        <img src="https://img.icons8.com/cotton/64/000000/sun--v3.png" />
        <a href="https://www.bernardyang.com/" target="_blank" rel="noreferrer">
          {expansionName.toUpperCase()} M+ S{season} Player Count
        </a>
      </h1>
      <p>{headerMessage}</p>
    </div>
  );
}
