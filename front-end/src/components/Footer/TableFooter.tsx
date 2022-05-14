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
          Github
        </a>
      </div>
    </div>
  );
};

export default TableFooter;
