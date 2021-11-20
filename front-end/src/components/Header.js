import classes from "./Header.module.css";

export default function Header({ season, expansionName }) {
  return (
    <div id="top" className={classes.header}>
      <h1 className={classes.title}>
        <a
          href="https://github.com/WebDevBernard/Twitter-React"
          target="_blank"
          rel="noreferrer"
        >
          `${expansionName} Mythic+ Season ${season} Player Count`
        </a>
      </h1>
    </div>
  );
}
