import classes from "./Header.module.css";

export default function Header({ season, expansionName, headerMessage }) {
  return (
    <div id="top" className={classes.header}>
      <h1 className={classes.title}>
        <a
          href="https://github.com/WebDevBernard/Raider.io-API-Data"
          target="_blank"
          rel="noreferrer"
        >
          {expansionName.toUpperCase()} M+ S{season} Player Count
        </a>
      </h1>
      <p>{headerMessage}</p>
    </div>
  );
}
