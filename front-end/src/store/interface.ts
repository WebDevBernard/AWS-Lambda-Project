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
export interface IProps {
  date: string;
  week: number;
  season: number;
  affix: string;
  expansion: string;
  total: number;
}
