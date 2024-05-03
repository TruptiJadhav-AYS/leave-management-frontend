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
                key={row.id}
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
                <TableCell align="right">{row.leave_type}</TableCell>
                <TableCell align="left">{row.reason}</TableCell>
                <TableCell align="right">
                  <Stack direction={"row"}>
                    <Button
                      disableRipple
                      variant="contained"
                      color="success"
                      size="small"
                      onClick={() => handleAccept(row.id)}
                      sx={{ marginRight: 1, textTransform: "none" ,height:"25px",width:"52px"}}
                    >
                      Approve
                    </Button>
                    <Button
                      disableRipple
                      variant="outlined"
                      color="error"
                      size="small"
                      onClick={() => handleReject(row.id)}
                      sx={{ textTransform: "none" ,height:"25px",width:"52px"}}
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
