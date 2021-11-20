import Chart from "./components/Chart";
import Loading from "./components/Loading";
import Header from "./components/Header";
import { useState, useEffect } from "react";
require("dotenv").config();
//  <========= Required Change Starts Here: =========>
const season = 2;

const startWeek = 19;
// Must be initials capitals
const expansionName = "SL";
//  <========= Required Change Ends Here: =========>
function App() {
  const [loadData, setLoadData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL, {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.REACT_APP_API_KEY,
          },
        });
        const responseData = await response.json();
        setLoadData(responseData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header expansionName={expansionName} season={season} />
      {!loadData ? (
        <Loading />
      ) : (
        <Chart
          loadData={loadData}
          startWeek={startWeek}
          expansionName={expansionName}
          season={season}
        />
      )}
    </>
  );
}

export default App;
