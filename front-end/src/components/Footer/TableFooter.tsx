import classes from "./Footer.module.css";

const TableFooter = () => {
  return (
    <div className={classes.table_footer}>
      <div className={classes.right_table}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/WebDevBernard/MythicPlus-PlayerCount"
        >
          View Github
        </a>
        |
        <a
          target="_blank"
          rel="noreferrer"
          href="https://icons8.com/icon/SmZQEPEk3iZP/world-of-warcraft"
        >
          World of Warcraft icon by Icons8
        </a>
      </div>
    </div>
  );
};

export default TableFooter;
