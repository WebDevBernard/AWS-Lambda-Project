import classes from "./Footer.module.css";

const TableFooter = () => {
  return (
    <div className={classes.table_footer}>
      <div className={classes.right_table}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.reddit.com/user/nextjsdev"
        >
          Reddit
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/WebDevBernard/MythicPlus-PlayerCount"
        >
          Github
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://icons8.com/icon/SmZQEPEk3iZP/world-of-warcraft"
        >
          WoW icon by Icons8
        </a>
      </div>
    </div>
  );
};

export default TableFooter;
