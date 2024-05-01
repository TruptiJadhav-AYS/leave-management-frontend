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
import { useGetPendingRequestsQuery } from "../Store/slice/apiLeaveBalanceSlice";
import { useUpdateStatusMutation } from "../Store/slice/apiLeaveBalanceSlice";




export default function PendingReq() {
  const { data: pr, isSuccess } = useGetPendingRequestsQuery();
  const PendingRequestList = pr || [];

  const [updateStatus] = useUpdateStatusMutation();

  const handleAccept = (id) => {
    updateStatus({ id: id, updatedLeaveStatus: 'approved' });
  
  };
  
  const handleReject = (id) => {
    updateStatus({ id: id, updatedLeaveStatus: 'rejected' });
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
              <TableCell sx={{ fontWeight: "bold" }}>Id</TableCell>
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
                key={row.id} // Changed key to use id instead of name
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.employeeName}</TableCell>
                <TableCell align="center">{row.start_date}</TableCell>
                <TableCell align="center">
                  {row.end_date !== "" ? row.toDate : "-"}
                </TableCell>
                <TableCell align="right">{row.leave_type}</TableCell>
                <TableCell align="left">{row.reason}</TableCell>
                <TableCell align="right">
                  <Stack direction={"row"}>
                    <Button
                      disableRipple
                      variant="contained"
                      color="success"
                      size="small"
                      onClick={() => handleAccept(row.id)} // Changed to pass id to handleAccept
                      sx={{ marginRight: 1, textTransform: "none" }}
                    >
                      Accept
                    </Button>
                    <Button
                      disableRipple
                      variant="outlined"
                      color="error"
                      size="small"
                      onClick={() => handleReject(row.id)} // Changed to pass id to handleReject
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
