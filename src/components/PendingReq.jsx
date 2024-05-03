import {
  Card,
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
import { useSelector } from "react-redux";
<<<<<<< HEAD
import { useGetPendingRequestsQuery } from "../Store/slice/apiLeaveBalanceSlice";
import { useUpdateStatusMutation } from "../Store/slice/apiLeaveBalanceSlice";

export default function PendingReq() {
  const { data: pr, isSuccess, isError } = useGetPendingRequestsQuery();
=======
import { useGetPendingRequestQuery } from "../Store/slice/apiLeaveReqSlice";
import { useUpdateLeaveStatusMutation } from "../Store/slice/apiLeaveReqSlice";

export default function PendingReq() {
  const {
    data: pendingRequest,
  } = useGetPendingRequestQuery();

  const id = useSelector((state) => state.employees.userId);

  const PendingRequestList = pendingRequest
    ? pendingRequest.filter((request) => request.emp_id !== id)
    : [];

  const [updateStatus] = useUpdateLeaveStatusMutation();

  const handleAccept = (id) => {
    updateStatus({ id: id, status: "approved" });
  };

  const handleReject = (id) => {
    updateStatus({ id: id, status: "rejected" });
  };
>>>>>>> origin

  // const loggedInEmployeeId = useSelector((state) => state.loggedInEmployee?.id);
  const id = useSelector((state) => state.employees.userId);
  console.log(id);
  // console.log(loggedInEmployeeId);

  // Filter pending requests to exclude requests of the logged-in employee
  const PendingRequestList = pr
    ? pr.filter((request) => request.emp_id !== id)
    : [];

  console.log(PendingRequestList);

  // const PendingRequestList = pr || [];

  const [updateStatus, { isLoading, error }] = useUpdateStatusMutation();

  const handleAccept = (id) => {
    updateStatus({ id: id, status: "approved" });
  };

  const handleReject = (id) => {
    updateStatus({ id: id, status: "rejected" });
  };

  return (
    <Card sx={{ height: "100%", overflow: "auto" }}>
      <Divider />
      <TableContainer
        component={Paper}
        sx={{ height: "99%", scrollbarWidth: "thin" }}
      >
        <Table sx={{ minWidth: 700 }} stickyHeader>
          <TableHead>
            <TableRow>
              {/* <TableCell sx={{ fontWeight: "bold" }}>Id</TableCell> */}
              <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                From date
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
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
<<<<<<< HEAD
                key={row.id} // Changed key to use id instead of name
=======
                key={row.id}
>>>>>>> origin
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
<<<<<<< HEAD
                {/* <TableCell component="th" scope="row">
                  {row.id}
                </TableCell> */}
                <TableCell>{row.employeeName}</TableCell>
                <TableCell align="center">{row.start_date}</TableCell>
                <TableCell align="center">
                  {row.end_date !== "" ? row.end_date : "-"}
                </TableCell>
=======
                <TableCell component="th" scope="row">
                  {row.employeeName}
                </TableCell>
                <TableCell align="center">{formatDate(row.start_date)}</TableCell>
                <TableCell align="center">
                  {row.toDate !== "" ? formatDate(row.end_date) : "-"}
                </TableCell>
>>>>>>> origin
                <TableCell align="right">{row.leave_type}</TableCell>
                <TableCell align="left">{row.reason}</TableCell>
                <TableCell align="right">
                  <Stack direction={"row"}>
                    <Button
                      disableRipple
                      variant="contained"
                      color="success"
                      size="small"
<<<<<<< HEAD
                      onClick={() => handleAccept(row.id)} // Changed to pass id to handleAccept
                      sx={{ marginRight: 1, textTransform: "none" }}
=======
                      onClick={() => handleAccept(row.id)}
                      sx={{ marginRight: 1, textTransform: "none" ,height:"25px",width:"52px"}}
>>>>>>> origin
                    >
                      Approve
                    </Button>
                    <Button
                      disableRipple
                      variant="outlined"
                      color="error"
                      size="small"
<<<<<<< HEAD
                      onClick={() => handleReject(row.id)} // Changed to pass id to handleReject
                      sx={{ textTransform: "none" }}
=======
                      onClick={() => handleReject(row.id)}
                      sx={{ textTransform: "none" ,height:"25px",width:"52px"}}
>>>>>>> origin
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
