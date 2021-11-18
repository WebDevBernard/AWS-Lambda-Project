import { useState } from "react";
require("dotenv").config();

function App() {
  const [loadData, setLoadData] = useState({
    schedule: [{ date: "", season: "", days:"", cycle }],
  });
  fetch(process.env.REACT_APP_API_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.REACT_APP_API_KEY,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      setLoadData({ schedule: data });
    })
    .catch((error) => console.log("Error retrieving data:", error));

  if (!loadData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        {loadData.schedule.map((item) => {
          return <li>{item.weeks[1]}</li>;
        })}
      </div>
    </>
  );
}

export default App;
