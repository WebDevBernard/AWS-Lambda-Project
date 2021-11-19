import { useState, useEffect } from "react";
require("dotenv").config();

function App() {
  const [loadData, setLoadData] = useState();
  const [isLoading, setIsLoading] = useState();
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
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (!loadData) {
    return <div>Loading...</div>;
  }
  const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
  };
  return (
    <>
      <div>
        {Object.keys(loadData).map((key, i) => {
          return (
            <div key={loadData[key].date} id={loadData[key].date}>
              <p>
                Date : {loadData[key].date}, Season:{loadData[key].season}
                Week:
                {loadData[key].week}
              </p>
              <ul>
                {loadData[key].affixes.map((affixDetail) => (
                  <li key={generateKey(affixDetail)}>{affixDetail}</li>
                ))}
              </ul>
              <ul>
                {Object.keys(loadData[key].rotation).map((affixKey) => (
                  <li key={generateKey(loadData[key].rotation[affixKey])}>
                    {affixKey}:{loadData[key].rotation[affixKey]}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
