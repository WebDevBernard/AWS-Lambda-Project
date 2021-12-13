import classes from "./Header.module.css";
export default function Header({ season, expansionName, headerMessage }) {
  return (
    <div id="top" className={classes.header}>
      <h1 className={classes.title}>
        <img src="https://img.icons8.com/cotton/64/000000/sun--v3.png" />
        <a>
          {expansionName.toUpperCase()} M+ S{season} Player Count
        </a>
      </h1>
      <a
        href="https://github.com/WebDevBernard/MythicPlus-PlayerCount"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        <button className={classes.button}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
          Github Link
        </button>
      </a>
      <p>{headerMessage}</p>
    </div>
  );
}
