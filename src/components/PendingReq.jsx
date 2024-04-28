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
import { useSelector } from 'react-redux'
// import { useGetPendingRequestsQuery } from "../Store/slice/apiLeaveBalanceSlice";

const handleAccept = (name) => {

};

const handleReject = (name) => {

};
export default function PendingReq() {
  const PendingRequestList = useSelector(state=>state.PendingRequests.PendingRequestList)
  // const id = useSelector((state) => state.employees.userId);

  // const { data: pr, isSuccess } = useGetPendingRequestsQuery(id);
  // console.log('History....', pr)
  // const PendingRequestList = pr.pendingRequests || []

  console.log(PendingRequestList)
  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split("-");
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

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
        <Table sx={{ minWidth: 700 }} stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                From date
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>
                To date
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Leave Type
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>
                Reason
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {PendingRequestList.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{formatDate(row.fromDate)}</TableCell>
                <TableCell align="center">{row.toDate !== ""
                  ? formatDate(row.toDate)
                  : "-"}</TableCell>
                <TableCell align="right">{row.leaveType}</TableCell>
                <TableCell align="left">{row.reason}</TableCell>
                <TableCell align="right">
                  <Stack direction={"row"}>
                    <Button
                      disableRipple
                      variant="contained"
                      color="success"
                      size="small"
                      onClick={() => handleAccept(row.name)}
                      sx={{ marginRight: 1, textTransform: "none" }}
                    >
                      Accept
                    </Button>
                    <Button
                      disableRipple
                      variant="outlined"
                      color="error"
                      size="small"
                      onClick={() => handleReject(row.name)}
                      sx={{ textTransform: "none" }}
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
