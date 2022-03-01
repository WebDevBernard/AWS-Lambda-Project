import { FC } from "react";
import { IProps } from "../../store/interface";
import { nanoid } from "nanoid";
import classes from "./Table.module.css";
import {
  Table as MuiTable,
  TableBody,
  TableHead,
  TableRow,
  styled,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: "#d2d1d6",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "rgba(49, 50, 82, 1)",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Table: FC<{ data: IProps[] }> = ({ data }) => {
  return (
    <MuiTable
      sx={{ width: 500, marginTop: 2 }}
      size="small"
      aria-label="a dense table"
    >
      <TableHead className={classes.table__head}>
        <TableRow>
          <StyledTableCell className={classes.table__cell}>
            Week
          </StyledTableCell>
          <StyledTableCell className={classes.table__cell}>
            Affixes
          </StyledTableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {data.map((item) => (
          <StyledTableRow
            key={nanoid()}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <StyledTableCell className={classes.table__cell}>
              {item.week}
            </StyledTableCell>
            <StyledTableCell className={classes.table__cell}>
              {item.affix.split("-").slice(0, 3).join(", ")}
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </MuiTable>
  );
};

export default Table;
