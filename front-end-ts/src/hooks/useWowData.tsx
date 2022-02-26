import { useEffect, useState, FC } from "react";

/**
 
Example of JSON Object:

{
 "date": "2022-03-11T13:55:52PST",
 "week": 12,
 "season": 3,
 "affix": "Tyrannical, Bolstering, Explosive, Encrypted",
 "expansion": "sl",
 "total": 860060
}

 **/

interface Props {
  date: string;
  week: number;
  season: number;
  affix: string;
  expansion: string;
  total: number;
}

const url: string = process.env.REACT_APP_API_URL!;

const useWowData: FC<{expansion}: Props> = (expansionName: string, season: string) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
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
          .filter((item: string) => {
            return item.expansion === expansionName;
          })
          .filter((item: number) => {
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
};

export default useWowData;
