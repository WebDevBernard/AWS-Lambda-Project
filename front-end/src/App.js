import Chart from "./components/Chart";
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

  return (
    <>
      <Chart loadData={loadData} />
    </>
  );
}

export default App;
