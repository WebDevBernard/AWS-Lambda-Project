import { FC } from "react";
import classes from "./Footer.module.css";
const Footer: FC<{ news: string }> = ({ news }) => {
  return (
    <div className={classes.footer}>
      <div className={classes.left}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
        <span>{news}</span>
      </div>

      <div className={classes.right}>
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

export default Footer;
