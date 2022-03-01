import { IProps } from "../../store/interface";
import { FC } from "react";
import Table from "../Table/Table";
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

const CustomToolTip: any = ({
  active,
  payload,
  label,
}: {
  active: any;
  payload: any;
  label: any;
}) => {
  if (active) {
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
      <div className={classes.chart}>
        <ResponsiveContainer minWidth={1024} width="100%" height={600}>
          <AreaChart
            data={chartData}
            margin={{
              top: 30,
              right: 30,
              left: 30,
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
              label={{
                value: "total",
                position: "top",
                fontSize: 18,
                fill: "#d2d1d6",
              }}
              className={classes.label}
            ></Area>
            <XAxis
              dataKey="week"
              axisLine={false}
              tickLine={false}
              tickFormatter={(number) => `Week ${number}`}
              tick={{ fill: "#d2d1d6" }}
            />
            <YAxis dataKey="total" hide />
            <Tooltip content={<CustomToolTip />} />
            <CartesianGrid opacity={0.1} horizontal={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div>
        <Table data={chartData} />
      </div>
    </div>
  );
};

export default Chart;
