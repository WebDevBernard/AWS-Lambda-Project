import { useEffect, useState } from "react";

/**
 
Example of JSON Object:

{
 "date": "2022-02-15T13:55:52PST",
 "week": 12,
 "season": 2,
 "affix": "Tyrannical-Bolstering-Explosive-Tormented",
 "expansion": "sl",
 "total": 860060
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

        // create a new array with total key updated with all weeks containing the same affix (eg. week 25 - week 13 - week 1)
        const totalToActualTotal = () => {
          const currentWeek = filterExpansionSeason;
          const findMinMax = (min, max) => {
            return currentWeek >= min && currentWeek <= max;
          };
          console.log(currentWeek);
        };
        totalToActualTotal();
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
