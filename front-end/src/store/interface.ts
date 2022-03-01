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
export interface IProps {
  date: string;
  week: number;
  season: number;
  affix: string;
  expansion: string;
  total: number;
}
