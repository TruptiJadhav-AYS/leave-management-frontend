import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const columns = [
  { id: "Name", label: "Name", minWidth: 180 },
  { id: "Email", label: "Email", minWidth: 170 },
  {
    id: "Role",
    label: "Role",
    minWidth: 130,

  },
  {
    id: "Gender",
    label: "Gender",
    minWidth: 80,
  },
  {
    id: "ManagerId",
    label: "ManagerId",
    minWidth: 80,
    align: "right",
  },
  {
    id: "DepartmentId",
    label: "DepartmentId",
    minWidth: 80,
    align: "right",
    // format: (value) => value.toFixed(2),
  },
];

// function createData(name, email, gender, role, managerId) {
//   return { name, email, gender, role, managerId };
// }

const rows = [
  {
    Name: "Pruthviraj Suryawanshi",
    Email: "pruthvi@gmail.com",
    Role: "Employee",
    Gender: "Male",
    ManagerId: 1,
    DepartmentId: 1,
  },
  {
    Name: "Pratiksha Nimbalkar",
    Email: "pratiksha@gmail.com",
    Role: "Employee",
    Gender: "Female",
    ManagerId: 1,
    DepartmentId: 1,
  },
  {
    Name: "Trupti Jadhav",
    Email: "trupti@gmail.com",
    Role: "Employee",
    Gender: "Female",
    ManagerId: 1,
    DepartmentId: 1,
  },
  {
    Name: "Ketan Rathod",
    Email: "ketan@gmail.com",
    Role: "Manager",
    Gender: "Male",
    DepartmentId: 1,
  },
  {
    Name: "Yogesh Patel",
    Email: "yogesh@gmail.com",
    Role: "Admin",
    Gender: "Male",
  },
  {
    Name: "Nupur Tyagi",
    Email: "nupur@gmail.com",
    Role: "Employee",
    Gender: "Female",
    ManagerId: 2,
    DepartmentId: 2,
  },
  {
    Name: "Mehvish Shaikh",
    Email: "mehvish@gmail.com",
    Role: "Employee",
    Gender: "Female",
    ManagerId: 2,
    DepartmentId: 2,
  },
  {
    Name: "Abhinandan Ambekar",
    Email: "abhi@gmail.com",
    Role: "Employee",
    Gender: "Male",
    ManagerId: 2,
    DepartmentId: 1,
  },
  {
    Name: "Shruti Bagde",
    Email: "shruti@gmail.com",
    Role: "Employee",
    Gender: "Female",
    ManagerId: 2,
    DepartmentId: 3,
  },
  {
    Name: "Prerana Divekar",
    Email: "prerana@gmail.com",
    Role: "Employee",
    Gender: "Female",
    ManagerId: 2,
    DepartmentId: 1,
  },
  {
    Name: "Abhishek Shinde",
    Email: "abhi123@gmail.com",
    Role: "Employee",
    Gender: "Male",
    ManagerId: 2,
    DepartmentId: 3,
  },
  {
    Name: "Shital Theware",
    Email: "shital@gmail.com",
    Role: "Employee",
    Gender: "Female",
    ManagerId: 2,
    DepartmentId: 3,
  },

  //   createData('India', 'IN', 1324171354, 3287263),
  //   createData('China', 'CN', 1403500365, 9596961),
  //   createData('Italy', 'IT', 60483973, 301340),
  //   createData('United States', 'US', 327167434, 9833520),
  //   createData('Canada', 'CA', 37602103, 9984670),
  //   createData('Australia', 'AU', 25475400, 7692024),
  //   createData('Germany', 'DE', 83019200, 357578),
  //   createData('Ireland', 'IE', 4857000, 70273),
  //   createData('Mexico', 'MX', 126577691, 1972550),
  //   createData('Japan', 'JP', 126317000, 377973),
  //   createData('France', 'FR', 67022000, 640679),
  //   createData('United Kingdom', 'GB', 67545757, 242495),
  //   createData('Russia', 'RU', 146793744, 17098246),
  //   createData('Nigeria', 'NG', 200962417, 923768),
  //   createData('Brazil', 'BR', 210147125, 8515767),
];

export default function EmployeeList() {
  const Navigate = useNavigate();
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
    <Paper sx={{ width: "100%", overflow: "hidden", mt: "13vh" }}>
      <Button
        variant="contained"
        onClick={() => {
          Navigate("/Employee/Employees/NewRegistration");
        }}
      >
        Add Employee
      </Button>
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
                        <TableCell key={column.id} align={column.align}>
                          {/* {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value} */}
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
