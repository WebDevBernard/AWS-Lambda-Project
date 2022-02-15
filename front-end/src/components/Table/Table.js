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

export default function Table({ data }) {
  const generateKey = () => {
    return `${Math.random()}_${new Date().getTime()}`;
  };
  return (
    <MuiTable
      sx={{ width: 500, marginTop: 2 }}
      size="small"
      aria-label="a dense table"
    >
      <TableHead
        style={{ background: "linear-gradient(to right, #9963B8, #4D16E1)" }}
      >
        <TableRow>
          <StyledTableCell style={{ fontFamily: "Roboto Mono" }}>
            Week
          </StyledTableCell>
          <StyledTableCell style={{ fontFamily: "Roboto Mono" }}>
            Affixes
          </StyledTableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {data
          .sort((a, b) => {
            return a.week - b.week;
          })
          .map((item) => (
            <StyledTableRow
              key={generateKey(item)}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <StyledTableCell style={{ fontFamily: "Roboto Mono" }}>
                {item.week}
              </StyledTableCell>
              <StyledTableCell style={{ fontFamily: "Roboto Mono" }}>
                {item.affix.split("-").slice(0, 3).join(", ")}
              </StyledTableCell>
            </StyledTableRow>
          ))}
      </TableBody>
    </MuiTable>
  );
}
