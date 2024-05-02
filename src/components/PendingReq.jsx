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
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
// import viewEmployeeLeavesForLeaveRequest from "./viewEmployeeLeavesForLeaveRequest";
import { useSelector } from 'react-redux'
import { useGetPendingRequestsQuery } from "../Store/slice/apiLeaveBalanceSlice";
import ViewEmployeeLeavesForLeaveRequest from "./ViewEmployeeLeavesForLeaveRequest";
import { useState } from "react";


const handleAccept = (name) => {

};

const handleReject = (name) => {

};
export default function PendingReq() {
  // const PendingRequestList = useSelector(state=>state.PendingRequests.PendingRequestList)
  const id = useSelector((state) => state.employees.userId);

  const { data: pr, isSuccess } = useGetPendingRequestsQuery(id);
  // console.log('History....', pr)
  const PendingRequestList = pr?.pendingRequests || []

  console.log(PendingRequestList)

  // const formatDate = (dateString) => {
  //   const [day, month, year] = dateString.split("-");
  //   const monthNames = [
  //     "Jan",
  //     "Feb",
  //     "Mar",
  //     "Apr",
  //     "May",
  //     "Jun",
  //     "Jul",
  //     "Aug",
  //     "Sep",
  //     "Oct",
  //     "Nov",
  //     "Dec",
  //   ];

  //   return `${day} ${monthNames[parseInt(month, 10) - 1]} ${year}`;
  // };
  const [open, setOpen] = useState(false);
  let [Emp,setEmp]= useState();

  return (
    <Card sx={{ height: "100%", overflow: "auto" }}>
      <ViewEmployeeLeavesForLeaveRequest Emp={Emp} open={open} setOpen={setOpen}/>

      <CardContent sx={{ position: "sticky", top: 0, zIndex: 1 }}>
        <Typography fontWeight={"bold"} textAlign={"left"} fontSize={"16px"}
        color={"red"}
        >
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
              <TableCell></TableCell>
              <TableCell ></TableCell>

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
                  {row.employee.name}
                </TableCell>
                <TableCell align="center">{row.start_date}</TableCell>
                <TableCell align="center">{row.end_date !== ""
                  ?row.end_date
                  : "-"}</TableCell>
                <TableCell align="center">{row.leave_type}</TableCell>
                <TableCell align="left">{row.reason}</TableCell>
                <TableCell align="center" sx={{display:'flex',justifyContent:'space-around'}}>
                  {/* <Stack direction={"row"}> */}
                    <Button
                      disableRipple
                      variant="contained"
                      color="success"
                      size="small"
                      onClick={() => handleAccept(row.name)}
                      sx={{textTransform: "none" }}
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
                  {/* </Stack> */}
                </TableCell>
                <TableCell sx={{padding:0}}>
                    <Button
                    // onClick={handleView}
                    onClick={()=>{
                      setOpen(true)
                      setEmp(row)
                    }}
                    >
                      <RemoveRedEyeIcon/>
                    </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
