import Chart from "./components/Chart";
import Loading from "./components/Loading";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
require("dotenv").config();

// https://codereview.stackexchange.com/questions/33527/find-next-occurring-friday-or-any-dayofweek
function setDay(date, dayOfWeek) {
  const resultDate = new Date(date.getTime() - 8 * 1000 * 60 * 60);
  resultDate.setDate(
    date.getDate() + ((7 + dayOfWeek - date.getDay() - 1) % 7) + 1
  );
  return resultDate;
}
const today = new Date();
//  <========= Required Change Starts Here: =========>
// Must be initials lowercase
const expansionName = "sl";
// Change Season
const season = 2;
// Must be greater than 1
const startWeek = 19;
// Change in case page count changes in raider.io
const pageCount = 20;
// remove title message ****

//  <========= Required Change Ends Here: =========>
// Updates header message
const headerMessage = `Next update ${setDay(today, 5)
  .toISOString()
  .slice(0, 10)} 12:00PM PST`;

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
      <Header
        expansionName={expansionName}
        season={season}
        headerMessage={headerMessage}
      />
      {!loadData ? (
        <Loading />
      ) : (
        <Chart
          pageCount={pageCount}
          loadData={loadData}
          startWeek={startWeek}
          expansionName={expansionName}
          season={season}
        />
      )}
      <Footer />
    </>
  );
}

export default App;
