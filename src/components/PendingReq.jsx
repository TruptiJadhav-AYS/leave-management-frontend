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
import {
  useGetPendingRequestByIdQuery,
  useGetPendingRequestQuery,
} from "../Store/slice/apiLeaveReqSlice";
import { useUpdateLeaveStatusMutation } from "../Store/slice/apiLeaveReqSlice";
import { useEffect, useState } from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export default function PendingReq() {
  let [pendingRequest, setPendingRequest] = useState([]);
  let [pendingRequestById, setPendingRequestById] = useState([]);

  const { data: PendingRequest, isSuccess,isLoading} = useGetPendingRequestQuery();

  const id = useSelector((state) => state.employees.userId);
  const role = useSelector((state) => state.employees.userRole);

  const { data: PendingRequestById, isSuccess: isSuccessById,isLoading:isLoadingById } = useGetPendingRequestByIdQuery(id);
  // console.log("data",data)

  useEffect(() => {
    if (isSuccess) {
      setPendingRequest(PendingRequest||[]);
    }
  }, [isSuccess, PendingRequest]);

  useEffect(() => {
    if (isSuccessById ) {
        setPendingRequestById(PendingRequestById.pendingRequests || []);
    }
}, [isSuccessById, PendingRequestById]);

  const PendingRequestList =
  role === "Manager"
    ? pendingRequestById || []
    : pendingRequest
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

  if(isLoadingById){
    return(<></>)
  }

  if(isLoading){
    return(<></>)
  }

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
            {PendingRequestList.map((row,index) => (
              <TableRow
                key={index}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell component="th" scope="row">
                  {console.log("row",row)}
                  {console.log("rowEmployeeName",row.employee.employeeName)}
                  {row.employee?.employeeName}
                </TableCell>
                <TableCell align="center">
                  {formatDate(row.start_date)}
                </TableCell>
                <TableCell align="center">
                  {row.end_date !== null ? formatDate(row.end_date) : "-"}
                </TableCell>
                <TableCell align="right">{row.leave_type}</TableCell>
                <TableCell align="left">{row.reason}</TableCell>
                <TableCell align="right">
                  {console.log("yyyyyyyyy",row.employeeName)}
                  {(row?.manager_id==id || row?.manager_id===null) && <Stack direction={"row"}>
                    <Button
                      disableRipple
                      variant="contained"
                      color="success"
                      size="small"
                      onClick={() => handleAccept(row.id)}
                      sx={{
                        marginRight: 1,
                        textTransform: "none",
                        height: "25px",
                        width: "52px",
                      }}
                    >
                      Approve
                    </Button>
                    <Button
                      disableRipple
                      variant="outlined"
                      color="error"
                      size="small"
                      onClick={() => handleReject(row.id)}
                      sx={{
                        textTransform: "none",
                        height: "25px",
                        width: "52px",
                      }}
                    >
                      Reject
                    </Button>
                  </Stack>}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
