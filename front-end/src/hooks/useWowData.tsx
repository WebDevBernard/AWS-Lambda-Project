import { useEffect, useState } from "react";
import { IProps } from "../store/interface";
import { mockData } from "../mock-data/mock-data";
/**
 
Example of JSON Object:

{
 "date": "2022-03-18T12:00:30PST",
 "week": 2,
 "season": 3,
 "affix": "Fortified-Bursting-Storming-Encrypted",
 "expansion": "sl",
 "total": 1037600
}

 **/

const useWowData = (expansionName: string, season: number) => {
  const [error, setError] = useState<string | null>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<IProps[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL!, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw response;
        }
        const responseData = await response.json();
        // const responseData = mockData;

        // filter array for the current expansion then current season and finally sort by the week
        const filterExpansionSeason = responseData
          .filter((item: IProps) => {
            return item.expansion === expansionName;
          })
          .filter((item: IProps) => {
            return item.season === season;
          })
          .sort((a: IProps, b: IProps) => a.week - b.week);

        // helper function to find week in findSchedule
        const filterWeekByIndex = (week: number) => {
          return filterExpansionSeason.findIndex(
            (obj: IProps) => obj.week === week
          );
        };

        // map new key value onto a new array
        const findSchedule = filterExpansionSeason.map((obj: IProps) => {
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
