import { useState } from "react";
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
  IconButton,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Table: FC<{ data: IProps[] }> = ({ data }) => {
  const [showTable, setShowTable] = useState<boolean>(true);
  return (
    <div className={classes.table}>
      <IconButton
        onClick={() => setShowTable(!showTable)}
        className={classes.table__button}
      >
        {showTable && <VisibilityIcon />}
        {!showTable && <VisibilityOffIcon />}
      </IconButton>
      <MuiTable size="small" aria-label="a dense table">
        <TableHead className={classes.table__head}>
          <TableRow>
            <TableCell className={classes.table__cell}>Week</TableCell>
            <TableCell className={classes.table__cell__right}>
              Affixes
            </TableCell>
          </TableRow>
        </TableHead>

        {showTable && (
          <TableBody>
            {data.map((item, index) => (
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
            ))}
          </TableBody>
        )}
      </MuiTable>
    </div>
  );
};

export default Table;
