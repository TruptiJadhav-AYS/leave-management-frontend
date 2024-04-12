import {
  Card,
  CardContent,
  Typography,
  Divider,
  Paper,
  TableHead,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Button,
  TableContainer,
  Stack,
} from "@mui/material";

function createData(name, fromDate, toDate, leaveType, reason, status) {
  return { name, fromDate, toDate, leaveType, reason, status };
}

const rows = [
  createData(
    "Pratiksha",
    "10-04-2024",
    "10-04-2024",
    "Half Day",
    "Doctor appointment"
  ),
  createData(
    "Trupti",
    "10-04-2024",
    "10-04-2024",
    "Half Day",
    "Doctor appointment"
  ),
  createData(
    "Pruthvi",
    "10-04-2024",
    "10-04-2024",
    "Half Day",
    "Doctor appointment"
  ),
  createData(
    "Priya",
    "10-04-2024",
    "10-04-2024",
    "Half Day",
    "Doctor appointment"
  ),
  createData(
    "Prerana",
    "10-04-2024",
    "10-04-2024",
    "Half Day",
    "Doctor appointment"
  ),
  createData(
    "Riya",
    "10-04-2024",
    "10-04-2024",
    "Half Day",
    "Doctor appointment"
  ),
];

const handleAccept = (name) => {
  console.log("Accepted", name);
};

const handleReject = (name) => {
  console.log("Rejected", name);
};
export default function PendingReq() {

  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('-');
    const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  
    return `${day} ${monthNames[parseInt(month, 10) - 1]} ${year}`;
  };
  
  return (
    <Card sx={{ height: "100%", overflow: "auto" }}>
      <CardContent sx={{ position: "sticky", top: 0, zIndex: 1 }}>
        <Typography fontWeight={"bold"} textAlign={"left"} fontSize={"16px"}>
          Pending Requests
        </Typography>
      </CardContent>
      <Divider />
      <TableContainer
        component={Paper}
        sx={{ height: "51vh", scrollbarWidth: "thin" }}
      >
        <Table sx={{ minWidth: 680 }} stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                From date
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                To date
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Leave Type
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Reason
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{formatDate(row.fromDate)}</TableCell>
                <TableCell align="right">{formatDate(row.toDate)}</TableCell>
                <TableCell align="right">{row.leaveType}</TableCell>
                <TableCell align="right">{row.reason}</TableCell>
                <TableCell align="right">
                  <Stack direction={"row"}>
                  <Button
                    disableRipple
                    variant="contained"
                    color="success"
                    size="small"
                    onClick={() => handleAccept(row.name)}
                    sx={{ marginRight: 1 ,textTransform:"none"}}
                  >
                    Accept
                  </Button>
                  <Button
                    disableRipple
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() => handleReject(row.name)}
                    sx={{textTransform:"none"}}
                  >
                    Reject
                  </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
