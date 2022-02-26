import {FC} from "react"
const style = {
  display: "flex",
  alignContent: "center",
  marginLeft: "32px",
  marginTop: "16px",
  color: "#d2d1d6",
};

const Error: FC<{error: string}>({ error }) => {
  return (
    <div style={style}>
      <p> An error occured {error} </p>
    </div>
  );
}

export default Error