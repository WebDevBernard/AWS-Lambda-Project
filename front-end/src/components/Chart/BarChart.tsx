import { FC } from "react";
import { IProps } from "../../store/interface";
import * as _ from "lodash";
import { nanoid } from "nanoid";
import classes from "./Chart.module.css";
import Card from "../Card/Card";

const BarChart: FC<{ chartData: IProps[] }> = ({ chartData }) => {
  // lodash to find all affixes that have the same value and add their total
  const lodashSort = _.map(_.groupBy(chartData, "affix"), (o, idx) => {
    return { affix: idx, total: _.sumBy(o, "total") };
  });

  const lodashTotal = _.sumBy(chartData, "total");
  const percentage = (item: number) => Math.round((item / lodashTotal) * 100);
  // reverse sorts the array with highest as 0th array
  const sortedArray = lodashSort.sort((a, b) => b.total - a.total);
  console.log(lodashTotal);
  return (
    <Card>
      {sortedArray.map((item, index) => {
        return (
          <div className={classes.chart__item} key={nanoid()}>
            <p>{index + 1}</p>
            <p>{item.affix}</p>
            <p>{item.total}</p>
            <p>{percentage(item.total)}%</p>
          </div>
        );
      })}
    </Card>
  );
};
export default BarChart;
