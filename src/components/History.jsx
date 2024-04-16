import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import {useSelector} from "react-redux";

const columns = [
  { id: "Start_Date", label: "Start Date", minWidth: 90, ml:"500px"},
  { id: "End_Date", label: "End Date", minWidth: 80 },
  {
    id: "leave_type",
    label: "Leave Type",
    minWidth: 80,

  },
  {
    id: "reason",
    label: "Reason",
    minWidth: 80,
  },
  {
    id: "status",
    label: "Status",
    minWidth: 80,
  },
];


export default function History() {

  const LeaveHistory = useSelector((state)=>state.leaveHistory.LeaveHistory)
  // console.log("(((((((((((((((((((((((((", LeaveHistory)
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('/');
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
  
    return `${day} ${monthNames[parseInt(month, 10) - 1]} ${year}`;
  };
  
  return (
    <Paper sx={{ width: "100%", overflow: "hidden",pt:1}}>
      <TableContainer sx={{ height: "80vh" ,scrollbarWidth:"thin"}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow >
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  sx={{ color: "primary.main" ,fontWeight:550, fontSize:"16px"}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {LeaveHistory
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row,index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>

                    {columns.map((column) => {
                      const value = column.id === 'Start_Date' || column.id === 'End_Date' ? row[column.id]!=="" ? formatDate(row[column.id]) : "-" :row[column.id];
                      return (
                        
                        <TableCell key={column.id} align={column.align} sx={{color: 
                          column.id === "status" && value === "Pending" ? "#7B3F00" : 
                          column.id === "status" && value === "Accepted" ? "darkgreen" : 
                          column.id === "status" && value === "Rejected" ? "darkred" : 
                          "black",
                          fontWeight: 
                          column.id === "status" && value === "Pending" ? "bold" : 
                          column.id === "status" && value === "Accepted" ? "bold" : 
                          column.id === "status" && value === "Rejected" ? "bold" : 
                          "black"}}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10,15,20]}
        component="div"
        count={LeaveHistory.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}









































// import { Box, Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { List } from "@mui/material";
// import ListItem from "@mui/material/ListItem";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import AddIcon from "@mui/icons-material/Add"

// export default function EmployeeList() {
//   let Navigate = useNavigate();

//   const employeeList = [
//     { Name: "Pruthviraj Suryawanshi", Role: "Employee", Gender: "Male" },
//     { Name: "Pratiksha Nimbalkar", Role: "Employee", Gender: "Female" },
//     { Name: "Trupti Jadhav", Role: "Employee", Gender: "Female" },
//     { Name: "Ketan Rathod", Role: "      Manager", Gender: "Male" },
//     { Name: "Pratik Deshmukh", Role: "Admin", Gender: "Male" },
//     { Name: "Nupur Tyagi", Role: "Employee", Gender: "Female" },
//     { Name: "Mehvish Shaikh", Role: "Employee", Gender: "Female" },
//     { Name: "Abhinandan Ambekar", Role: "Employee", Gender: "Male" },
//   ];
//   return (
//     <Box
//       sx={{
//         justifyContent: "center",
//         alignItems: "center",
//         px: "10%",
//         pt: "14vh",
//         width: "100%",
//         textAlign: "center",
//       }}
//     >
//       <List sx={{ overflow: "auto", width: "100%" }}>
//         <ListItem sx={{ pt: "20px", backgroundColor: "#fafafa" }}>
//           <Typography color="primary.main" width="40%" fontWeight={350} pl={2}>
//             NAME
//           </Typography>
//           <Typography
//             color="primary.main"
//             width="30%"
//             fontWeight={350}
//             pl={0.9}
//           >
//             GENDER
//           </Typography>
//           <Typography
//             color="primary.main"
//             width="30%"
//             fontWeight={350}
//             pl={1.7}
//           >
//             ROLE
//           </Typography>
//         </ListItem>
//         <Divider />
//         {employeeList.map((employee, index) => (
//           <ListItem key={index} sx={{ backgroundColor: "#fafafa", py: "12px" }}>
//             <Typography width="40%" pl={1} textAlign={"left"}>
//               {employee.Name}
//             </Typography>
//             <Typography width="30%" pl={1} textAlign={"left"}>
//               {employee.Gender}
//             </Typography>
//             <Typography width="30%" pl={1} textAlign={"left"}>
//               {employee.Role}
//             </Typography>
//           </ListItem>
//         ))}
//       </List>
//       <Button
//         variant="contained"
//         onClick={() => {
//           Navigate("/Employee/Employees/NewRegistration");
//         }}
//       >
//         Employee
//         <AddIcon/>
//       </Button>
//     </Box>
//   );
// }
