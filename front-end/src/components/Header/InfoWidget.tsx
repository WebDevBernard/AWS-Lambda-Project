import classes from "./Header.module.css";
import { FC } from "react";
import { IProps } from "../../store/interface";
import { threeAffix } from "../../utils/format";
import { numberWithCommas } from "../../utils/format";
import * as _ from "lodash";

const InfoWidget: FC<{ counterData: IProps[] }> = ({ counterData }) => {
  // lodash find highest number and lowest weeks
  const min = _.minBy(counterData, function (o) {
    return o.total;
  });
  const max = _.maxBy(counterData, function (o) {
    return o.total;
  });
  return (
    <>
      <div className={classes.info}>
        <h2>Most Played Week</h2>
        <span>Week {max?.week || 0}</span>
        <span>{numberWithCommas(max?.total || 0)}</span>
        <h2>Affixes</h2>
        <span>{threeAffix(max?.affix || "")}</span>
      </div>
      <div className={classes.info}>
        <h2>Least Played Week</h2>
        <span>Week {min?.week || 0}</span>
        <span>{numberWithCommas(min?.total || 0)}</span>
        <h2>Affixes</h2>
        <span>{threeAffix(min?.affix || "")}</span>
      </div>
    </>
  );
};

export default InfoWidget;
