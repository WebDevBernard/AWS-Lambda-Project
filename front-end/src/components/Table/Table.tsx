import Tooltip from "@mui/material/Tooltip";
import { makeStyles } from "@mui/styles";
import moment from "moment";
import { FC } from "react";
import { IProps } from "../../store/interface";
import Card from "../Card/Card";
import { nanoid } from "nanoid";
import classes from "./Table.module.css";

import {
  Table as MuiTable,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
const useStyles = makeStyles(() => ({
  tooltip: {
    backgroundColor: "black",
    color: "#c3c7ee",
    fontFamily: "Open Sans",
    fontSize: 12,
  },
}));

const Table: FC<{ tableData: IProps[] }> = ({ tableData }) => {
  const muiClass = useStyles();
  return (
    <Card>
      <div className={classes.table}>
        <MuiTable size="small" aria-label="a dense table">
          <TableHead className={classes.table__head}>
            <TableRow>
              <TableCell className={classes.table__cell}>Week</TableCell>
              <TableCell className={classes.table__cell__right}>
                Affixes
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {tableData.map((item, index) => (
              <Tooltip
                classes={{ tooltip: muiClass.tooltip }}
                title={moment(
                  new Date().setDate(
                    new Date(item.date.slice(0, 10)).getDate() - 9
                  )
                ).format("MMMM Do YYYY")}
                placement="left"
              >
                <TableRow
                  className={
                    index % 2 ? classes.table__row : classes.table__alt__row
                  }
                  key={nanoid()}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell className={classes.table__cell}>
                    {item.week}
                  </TableCell>

                  <TableCell className={classes.table__cell}>
                    {item.affix.split("-").slice(0, 3).join(", ")}
                  </TableCell>
                </TableRow>
              </Tooltip>
            ))}
          </TableBody>
        </MuiTable>
      </div>
    </Card>
  );
};

export default Table;
