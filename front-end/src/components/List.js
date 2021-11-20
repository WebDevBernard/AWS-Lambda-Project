import { Table, TableBody, TableHead, TableRow, styled } from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function List({ renderAffixList }) {
  const generateKey = () => {
    return `${Math.random()}_${new Date().getTime()}`;
  };
  return (
    <Table
      sx={{ width: 500, marginTop: 2 }}
      size="small"
      aria-label="a dense table"
    >
      <TableHead>
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
        {renderAffixList().map((list) => (
          <StyledTableRow
            key={generateKey(list)}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <StyledTableCell style={{ fontFamily: "Roboto Mono" }}>
              {list.split("-")[0]}
            </StyledTableCell>
            <StyledTableCell style={{ fontFamily: "Roboto Mono" }}>
              {list.split("-").slice(1, 5).join(", ")}
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  );
}
