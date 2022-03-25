import { IProps } from "../../store/interface";
import { FC } from "react";

import Card from "../Card/Card";
import classes from "./Chart.module.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CustomToolTip = ({
  active,
  payload,
}: {
  active?: boolean;
  payload?: IProps;
}) => {
  if (Array.isArray(payload) && active) {
    return (
      <div className={classes.tooltip}>
        <p>Week {payload[0].payload.week}</p>
        <p>{numberWithCommas(payload[0].payload.total)}</p>
        <p>{payload[0].payload.affix}</p>
      </div>
    );
  }
  return null;
};

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const Chart: FC<{ chartData: IProps[] }> = ({ chartData }) => {
  return (
    <div className={classes.body}>
      <Card>
        <ResponsiveContainer height="100%" maxHeight={500} aspect={2}>
          <AreaChart
            data={chartData}
            margin={{
              top: 30,
              right: 30,

              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4}></stop>
                <stop
                  offset="75%"
                  stopColor="#2451B7"
                  stopOpacity={0.05}
                ></stop>
              </linearGradient>
            </defs>
            <Area
              dot
              type="monotone"
              dataKey="total"
              stroke="#2451B7"
              fill="url(#color)"
              // label={{
              //   value: "total",
              //   position: "top",
              //   fontSize: 14,
              //   fill: "#606a99",
              //   formatter: labelFormatter,
              // }}
              className={classes.label}
            ></Area>
            <XAxis
              dataKey="week"
              tickFormatter={(number) => `Week ${number}`}
              tick={{ fill: "#606a99", fontSize: 12 }}
            />
            <YAxis
              dataKey="total"
              tickLine={false}
              axisLine={false}
              tickFormatter={(number) => numberWithCommas(number)}
              tick={{ fill: "#606a99", fontSize: 12 }}
            />
            <Tooltip content={<CustomToolTip />} />
            <CartesianGrid opacity={0.1} horizontal={false} />
          </AreaChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
};

export default Chart;
