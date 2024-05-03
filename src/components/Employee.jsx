// import React from "react";
// import {
//   Typography,
//   Grid,
//   Button,
//   Divider,
//   InputBase,
//   Box,
//   Paper,
//   Card,
// } from "@mui/material";
// import Avatar from "@mui/material/Avatar";
// import ListItem from "@mui/material/ListItem";
// import AddIcon from "@mui/icons-material/Add";
// import { useNavigate } from "react-router-dom";
// import SearchIcon from "@mui/icons-material/Search";
// import { useState,useEffect } from "react";
// import { useSelector,useDispatch,} from "react-redux";
// import { setSelectedEmp } from "../Store/slice/EmployeeSlice";
// import { useGetEmployeesQuery } from '../Store/slice/apiEmployeeSlice';
// import { CircularProgress } from "@mui/material";

// export default function EmployeeList({onAddOrEdit}) {
//   const Navigate = useNavigate();
//   const [searchText, setsearchText] = useState("");
//   const dispatch=useDispatch()
//   const { data: employees,isLoading,isError} = useGetEmployeesQuery();

//   // useEffect(() => {
//     console.log("employees:", employees);
//   //   console.log("error:", error);
//   //   console.log("isLoading:", isLoading);
//   // }, [employees, error, isLoading]);

//   // const Employees = useSelector((state) => state.employees.Employees);
//   const Employees= employees || [];

//   function handleSearchText(event) {
//     setsearchText(event.target.value);
//   }

//   if (isLoading) {
//     return (
//     <Grid justifyContent={"center"} alignItems={"center"}>
//     <CircularProgress />
//     </Grid>
//   );
//   }

//   if (isError) {
//     return <div>Error fetching data</div>;
//   }

//   const FilterArray = Employees.filter((contact) =>
//     contact.name.toLowerCase().includes(searchText.toLowerCase())
//   );

//   return (
//     <Paper style={{height:"100%"}}>
//       <Grid
//         container
//         sx={{
//           width: "100%",
//           top: "10%",
//           zIndex: 1,
//           bgcolor: "white",
//           height: "7.5vh",
//           ml: 1,
//           pt:1
//         }}
//         position={"sticky"}
//         justifyContent={"space-between"}
//       >
//         <Grid item xs={10.5}>
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "space-between",
//               width: "40%",
//               border: "2px solid rgba(204, 204, 204, 0.5)",
//               borderRadius: "10px",
//             }}
//           >
//             <InputBase
//               sx={{ width: "98%", pl: 2 }}
//               placeholder="Search for Employee..."
//               onChange={handleSearchText}
//             />
//             <SearchIcon sx={{ my: "1%", mr: 1.5 }} />
//           </Box>
//         </Grid>
//         <Grid item xs={1.5}>
//           <Button
//             variant="contained"
//             sx={{
//               borderRadius: "10px",
//               backgroundColor: "white",
//               color: "black",
//             }}
//             onClick={() => {
//               onAddOrEdit("add");
//               Navigate("/Employee/Employees/EmployeeDetailsForm")
//             }}
//           >
//             <AddIcon />
//           </Button>
//         </Grid>
//         {/* <Divider /> */}
//       </Grid>

//       <Grid
//         container
//         sx={{
//           top: "11%",
//           width: "100%",
//         }}
//       >
//         <Grid
//           sx={{
//             minHeight: "100%",
//             overflowY: "scroll",
//             scrollbarWidth: "thin",
//             minWidth: "100%",
//           }}
//         >
//           {FilterArray.map((contact, index) => (
//             <Button
//               key={index}
//               onClick={() => {
//                 dispatch(setSelectedEmp(contact.id))
//                 Navigate(`/Employee/${contact.id}`);
//               }}
//               sx={{ width: "100%" }}
//             >
//               <Card
//                 sx={{  borderRadius: 2, mr: 1, width: "100%" }}
//                 elevation={3}
//                 key={index}
//               >
//                 <ListItem alignItems="flex-start" mx={1} >
//                   <Grid container spacing={2} alignItems={"center"}>
//                     <Grid item lg={1} md={1}>
//                       <Avatar src={contact.Profile} alt={contact.name} />
//                     </Grid>
//                     <Grid item lg={11} md={11}>
//                       <Typography
//                         variant="body1"
//                         sx={{
//                           textTransform: "none",
//                           color: "black",
//                           fontWeight: "30",
//                         }}
//                       >
//                         {contact.name}
//                       </Typography>
//                       <Typography
//                         variant="caption"
//                         sx={{ textTransform: "none", color: "black" }}
//                       >
//                         {contact.email}
//                       </Typography>
//                     </Grid>
//                   </Grid>
//                 </ListItem>
//               </Card>
//             </Button>
//           ))}
//         </Grid>
//       </Grid>
//     </Paper>
//   );
// }
import * as React from "react";
import Paper from "@mui/material/Paper";
import { Box, Button, Divider, InputBase, Typography } from "@mui/material";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Table,
  Stack,
} from "@mui/material";
import { useGetEmployeesQuery } from "../Store/slice/apiEmployeeSlice";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import SearchIcon from "@mui/icons-material/Search";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { selectProject } from "../Store/slice/ProjectsSlice";
import { setSelectedEmp } from "../Store/slice/EmployeeSlice";

const columns = [
  { id: "name", label: "Name", minWidth: 180 },
  { id: "email", label: "Email", minWidth: 170 },

  {
    id: "gender",
    label: "Gender",
    minWidth: 110,
  },
  {
    id: "manager",
    label: "Manager",
    minWidth: 120,
    // align: "center",
  },
  {
    id: "department",
    label: "Department",
    minWidth: 80,
    align: "left",
  },
  // {
  //   id: "Inventory",
  //   label: "Inventory",
  //   minWidth: 80,
  //   align: "center",
  // },
];

export default function EmployeeList({ onAddOrEdit }) {
  const [searchText, setsearchText] = useState("");
  //   const Projects = useSelector((state) => state.Project.Projects);
  const { data: Employees, isSuccess } = useGetEmployeesQuery();
  // const [searchText, setSearchText] = useState("");
  // const [sortedBy, setSortedBy] = useState("name");
  const [sortOrder, setSortOrder] = useState(null);
  const [filteredEmployees, setFilteredEmployees] = useState([]); // New state for filtered employees
  // const Navigate = useNavigate();
  const employees = Employees || [];

  useEffect(() => {
    // Update filteredEmployees when employees data changes
    if (isSuccess) {
      setFilteredEmployees(employees);
    }
  }, [isSuccess, employees]);

  useEffect(() => {
    // Filter employees based on search text when it changes
    setFilteredEmployees(
      employees.filter((employee) =>
        employee.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [searchText, employees]);
  // console.log(Employees)
  //   const selectedProject = useSelector((state) => state.Project.selectedProject);

  //   console.log("selected project", selectedProject);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortedBy, setSortedBy] = useState("name"); // Track sorted column
  // const [sortOrder, setSortOrder] = useState("asc"); // Track sort order

  function handleSearchText(event) {
    setsearchText(event.target.value);
  }
  // console.log(searchText);

  const sortedRows = useMemo(() => {
    // Sort rows based on sortedBy and sortOrder
    return employees.slice().sort((a, b) => {
      const valueA = a[sortedBy];
      const valueB = b[sortedBy];

      if (typeof valueA === "string") {
        return sortOrder === "asc"
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      } else {
        return sortOrder === "asc" ? valueA - valueB : valueB - valueA;
      }
    });
  }, [sortedBy, sortOrder]);

  const handleSortClick = (columnId) => {
    const isAscending = sortedBy === columnId && sortOrder === "asc";
    setSortedBy(columnId);
    setSortOrder(isAscending ? "desc" : "asc");
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const FilterArray = sortedRows.filter((Employee) =>
    Employee.name.toLowerCase().includes(searchText.toLowerCase())
  );
  console.log(filteredEmployees);
  console.log("uytuyfyt", FilterArray);

  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        minHeight: "100%",
        height: "100%",
      }}
    >
      <Box display={"flex"} justifyContent={"space-between"} mt={1}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "30%",
            border: "2px solid rgba(204, 204, 204, 0.5)",
            borderRadius: "20px",
          }}
        >
          <InputBase
            sx={{ width: "90%", pl: 2 }}
            placeholder="Search for Employee..."
            onChange={handleSearchText}
          />
          <SearchIcon sx={{ my: "1.5%", mr: 1.5 }} />
        </Box>

        <Button
          variant="contained"
          sx={{ borderRadius: "50px", textTransform: "none" }}
          onClick={() => {
            onAddOrEdit("add");
            Navigate("/Employee/Employees/EmployeeDetailsForm");
          }}
        >
          Employee
          <AddIcon />
        </Button>
      </Box>
      <Divider />
      <TableContainer
        sx={{ height: "64.5vh", overflow: "auto", scrollbarWidth: "thin" }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  sx={{ color: "primary.main", minWidth: column.minWidth }}
                >
                  <Stack direction={"row"} alignItems={"center"}>
                    <Typography fontWeight={550} fontSize={"16px"}>
                      {column.label}
                    </Typography>
                    {column.label === "Name" ? (
                      <Button
                        disableRipple
                        size="small"
                        onClick={
                          column.id === "name"
                            ? () => handleSortClick(column.id)
                            : undefined
                        }
                      >
                        {sortOrder === "asc" ? (
                          <>
                            <ArrowUpwardIcon />
                          </>
                        ) : (
                          <>
                            <ArrowDownwardIcon />
                          </>
                        )}
                      </Button>
                    ) : null}
                  </Stack>
                </TableCell>
              ))}
              <TableCell
                sx={{ borderBottom: "1.5px solid rgba(204, 204, 204, 0.5)" }}
              />
            </TableRow>
          </TableHead>
          <TableBody>
            {sortOrder
              ? FilterArray.map((row) => (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.name}
                    ml={2}
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                      dispatch(setSelectedEmp(row.id));
                      Navigate(`/Employee/${row.id}`);
                    }}
                  >
                    {columns.map((column, index) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={index} align={column.align}>
                          {column.id === "manager" && value
                            ? value.name
                            : column.id === "department" && value
                            ? value.department_name
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))
              : filteredEmployees
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.name}
                      ml={2}
                      sx={{ cursor: "pointer" }}
                      onClick={() => {
                        dispatch(setSelectedEmp(row.id));
                        Navigate(`/Employee/${row.id}`);
                      }}
                    >
                      {columns.map((column, index) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={index} align={column.align}>
                            {column.id === "manager" && value
                              ? value.name
                              : column.id === "department" && value
                              ? value.department_name
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20, 100]}
        component="div"
        count={employees.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}