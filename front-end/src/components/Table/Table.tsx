import { FC } from "react";
import { IProps } from "../../store/interface";
import { nanoid } from "nanoid";
import classes from "./Table.module.css";
import {
  Table as MuiTable,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";

const Table: FC<{ data: IProps[] }> = ({ data }) => {
  return (
    <MuiTable className={classes.table} size="small" aria-label="a dense table">
      <TableHead className={classes.table__head}>
        <TableRow>
          <TableCell className={classes.table__cell}>Week</TableCell>
          <TableCell className={classes.table__cell}>Affixes</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {data.map((item, index) => (
          <TableRow
            className={index % 2 ? classes.table__row : classes.table__alt__row}
            key={nanoid()}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell className={classes.table__cell}>{item.week}</TableCell>
            <TableCell className={classes.table__cell}>
              {item.affix.split("-").slice(0, 3).join(", ")}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </MuiTable>
  );
};

export default Table;
