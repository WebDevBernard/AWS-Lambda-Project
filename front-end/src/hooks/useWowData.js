import { useEffect, useState } from "react";

/**
 
Example of JSON Object:

{
    "date": "2022-02-15T06:49:07PST",
    "week": 33,
    "count": {
        "Tyrannical-Inspiring-Quaking-Tormented": 1196440
        },
    "season": 2,
    "expansion": "sl"
}

 **/

export default function useWowData(expansionName, season) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL, {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.REACT_APP_API_KEY,
          },
        });
        if (!response.ok) {
          throw new Error(`Response Status: ${response.status}`);
        }
        const responseData = await response.json();

        // filter array for the current expansion then current season
        const filterExpansionSeason = responseData
          .filter((item) => {
            return item.expansion === expansionName;
          })
          .filter((item) => {
            return item.season === season;
          });
        console.log(filterExpansionSeason);
        setData(filterExpansionSeason);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [expansionName, season]);
  return {
    loading,
    error,
    data,
  };
}
