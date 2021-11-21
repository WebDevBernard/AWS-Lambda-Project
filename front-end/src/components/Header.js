import classes from "./Header.module.css";

export default function Header({ season, expansionName, headerMessage }) {
  return (
    <div id="top" className={classes.header}>
      <h1 className={classes.title}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://icons8.com/icon/OkWsH5jFVMve/sun"
        >
          <img src="https://img.icons8.com/cotton/64/000000/sun--v3.png" />
        </a>
        <a href="https://www.bernardyang.com/" target="_blank" rel="noreferrer">
          {expansionName.toUpperCase()} M+ S{season} Player Count
        </a>
      </h1>
      <p>{headerMessage}</p>
    </div>
  );
}
