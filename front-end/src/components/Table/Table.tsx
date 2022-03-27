import Tooltip from "@mui/material/Tooltip";
import { affixDate } from "../../utils/date";
import { FC } from "react";
import { IProps } from "../../store/interface";
import { threeAffix } from "../../utils/format";
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

const Table: FC<{ tableData: IProps[] }> = ({ tableData }) => {
  return (
    <Card>
      <div className={classes.table}>
        <MuiTable size="small" aria-label="a dense table">
          <TableHead className={classes.table__head}>
            <TableRow sx={{ "td, th": { border: 0 } }}>
              <TableCell className={classes.table__heading}>Week</TableCell>
              <TableCell className={classes.table__heading__right}>
                Affixes
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {tableData.map((item, index) => (
              <Tooltip
                key={nanoid()}
                title={<p className={classes.tooltip}>{affixDate(index)}</p>}
                arrow
                placement="left"
              >
                <TableRow
                  className={
                    index % 2 ? classes.table__row : classes.table__alt__row
                  }
                  key={nanoid()}
                  sx={{ "td, th": { border: 0 } }}
                >
                  <TableCell className={classes.table__cell}>
                    {item.week}
                  </TableCell>

                  <TableCell className={classes.table__cell}>
                    {threeAffix(item.affix)}
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
