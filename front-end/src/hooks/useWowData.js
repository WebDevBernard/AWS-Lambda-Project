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

        // creates a new array with every total for a set of affixes
        const filterAffix = (affix) =>
          filterExpansionSeason
            .filter((obj) => obj.affix.includes(affix))
            .map((obj) => obj.total);

        // push all the new arrays into a single array
        const singleArray = filterExpansionSeason.map((element) => {
          return [filterAffix(element.affix)];
        });
        // helper function to conver the current week to current cycle
        const weekToCycle = (currentWeek) => Math.floor(currentWeek / 12);
        // replace total with the affixes that correspond to an array
        const arrayWithTotalArrays = filterExpansionSeason.map((obj, i) => {
          return {
            ...obj,
            total: singleArray[i][0]
              .slice(0, weekToCycle(obj.week) + 1)
              .reduce((prev, current) => current - prev, 0),
          };
        });

        setData(arrayWithTotalArrays);
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
