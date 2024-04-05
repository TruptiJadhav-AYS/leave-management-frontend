import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "Start_Date", label: "Start Date", minWidth: 80 },
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

const rows = [
  {
    Start_Date: "06/04/2024",
    End_Date: "07/05/2024",
    leave_type:"Full Day",
    reason:"Suffering from fever",
    status: "Pending",
  },
  {
    Start_Date: "12/03/2024",
    End_Date: "14/05/2024",
    leave_type:"Full Day",
    reason:"Family function",
    status: "Rejected",
  },
  {
    Start_Date: "12/03/2024",
    End_Date: "14/05/2024",
    leave_type:"Full Day",
    reason:"Scheduled exams",
    status: "Accepted",
  },
  {
    Start_Date: "10/02/2024",
    End_Date: "10/02/2024",
    leave_type:"Half Day",
    reason:"Shceduled doctors appointment",
    status: "Accepted",
  },
  {
    Start_Date: "12/01/2024",
    End_Date: "14/01/2024",
    leave_type:"Full Day",
    reason:"Family emergency",
    status: "Rejected",
  },
  {
    Start_Date: "09/12/2023",
    End_Date: "10/12/2023",
    leave_type:"Full Day",
    reason:"Scheduled dentist appointment",
    status: "Accepted",
  },
  {
    Start_Date: "25/11/2023",
    End_Date: "25/11/2023",
    leave_type:"Half Day",
    reason:"Attending conference ",
    status: "Accepted",
  },
  {
    Start_Date: "15/11/2023",
    End_Date: "17/11/2023",
    leave_type:"Full Day",
    reason:"Vacation",
    status: "Rejected",
  },
  {
    Start_Date: "10/11/2023",
    End_Date: "-",
    leave_type:"Half Day",
    reason:"Personal errands",
    status: "Accepted",
  },
  {
    Start_Date: "05/11/2023",
    End_Date: "07/11/2023",
    leave_type:"Full Day",
    reason:"Attending workshop",
    status: "Accepted",
  },
  {
    Start_Date: "28/10/2023",
    End_Date: "29/10/2023",
    leave_type:"Full Day",
    reason:"Team building activity",
    status: "Accepted",
  },
  {
    Start_Date: "20/10/2023",
    End_Date: "-",
    leave_type:"Half Day",
    reason:"Doctor's appointment",
    status: "Accepted",
  },
  {
    Start_Date: "15/10/2023",
    End_Date: "15/10/2023",
    leave_type:"Half Day",
    reason:"Attending seminar",
    status: "Accepted",
  },
  {
    Start_Date: "10/10/2023",
    End_Date: "12/10/2023",
    leave_type:"Full Day",
    reason:"Personal travel",
    status: "Accepted",
  },
  {
    Start_Date: "05/10/2023",
    End_Date: "-",
    leave_type:"Half Day",
    reason:"Parent-teacher meeting",
    status: "Accepted",
  },
  {
    Start_Date: "25/09/2023",
    End_Date: "25/09/2023",
    leave_type:"Half Day",
    reason:"Attending training session",
    status: "Accepted",
  }
];

export default function History() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(7);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden",py:2}}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  sx={{ color: "primary.main" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.Email}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} sx={{color: 
                          column.id === "status" && value === "Pending" ? "#FFA500" : 
                          column.id === "status" && value === "Accepted" ? "#008800" : 
                          column.id === "status" && value === "Rejected" ? "red" : 
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
        rowsPerPageOptions={[7, 10, 20]}
        component="div"
        count={rows.length}
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
//     { Name: "Ketan Rathod", Role: "Manager", Gender: "Male" },
//     { Name: "Yogesh Patel", Role: "Admin", Gender: "Male" },
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
