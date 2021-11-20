import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
} from "@mui/material";
export default function List({ renderAffixList }) {
  const generateKey = () => {
    return `${Math.random()}_${new Date().getTime()}`;
  };
  return (
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Week</TableCell>
          <TableCell>Affixes</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {renderAffixList().map((list) => (
          <TableRow
            key={generateKey(list)}
            // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell>{list.split("-")[0]}</TableCell>
            <TableCell>{list.split("-").slice(1, 5).join(", ")}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
