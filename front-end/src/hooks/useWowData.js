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

        // filter array for the current expansion then current season and finally sort by the week
        const filterExpansionSeason = responseData
          .filter((item) => {
            return item.expansion === expansionName;
          })
          .filter((item) => {
            return item.season === season;
          })
          .sort((a, b) => a.week - b.week);

        // helper function to find week in findSchedule
        const filterWeekByIndex = (week) => {
          return filterExpansionSeason.findIndex((obj) => obj.week === week);
        };

        // map new key value onto a new array
        const findSchedule = filterExpansionSeason.map((obj) => {
          if (obj.week >= 13) {
            return {
              ...obj,
              total:
                filterExpansionSeason[filterWeekByIndex(obj.week)].total -
                filterExpansionSeason[filterWeekByIndex(obj.week - 12)].total,
            };
          } else {
            return { ...obj };
          }
        });

        setData(findSchedule);
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
