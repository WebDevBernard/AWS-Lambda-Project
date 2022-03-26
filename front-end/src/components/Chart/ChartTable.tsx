import { FC } from "react";
import { IProps } from "../../store/interface";
import * as _ from "lodash";
import { nanoid } from "nanoid";
import classes from "./Chart.module.css";
import Card from "../Card/Card";

const ChartTable: FC<{ chartData: IProps[] }> = ({ chartData }) => {
  // lodash to find all affixes that have the same value and add their total
  const lodashSort = _.map(_.groupBy(chartData, "affix"), (o, idx) => {
    return { affix: idx, total: _.sumBy(o, "total") };
  });

  const lodashTotal = _.sumBy(chartData, "total");
  const percentage = (item: number) => Math.round((item / lodashTotal) * 100);
  // reverse sorts the array with highest as 0th array
  const sortedArray = lodashSort.sort((a, b) => b.total - a.total);

  // split each array item
  const splitArray = (input: string) => input.split("-");

  // add commas to numbers
  function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <Card>
      <table className={classes.table}>
        <thead className={classes.table__head}>
          <tr>
            <th>Affix 1 (2+)</th>
            <th>Affix 2 (4+)</th>
            <th>Affix 3 (7+)</th>
            <th>Seasonal Affix (10+)</th>
            <th>Total</th>
            <th>Overall</th>
          </tr>
        </thead>
        <tbody className={classes.table__body}>
          {sortedArray.map((item, index) => {
            return (
              <tr
                className={
                  index % 2 ? classes.table__item : classes.table__item__alt
                }
                key={nanoid()}
              >
                <td>{splitArray(item.affix)[0]}</td>
                <td>{splitArray(item.affix)[1]}</td>
                <td>{splitArray(item.affix)[2]}</td>
                <td>{splitArray(item.affix)[3]}</td>
                <td>{numberWithCommas(item.total)}</td>
                <td>{percentage(item.total)}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};
export default ChartTable;
