import classes from "./Error.module.css";

const Error = ({ error }: { error: string }) => {
  return (
    <div className={classes.error}>
      <p> An error occured {error} </p>
    </div>
  );
};

export default Error;
