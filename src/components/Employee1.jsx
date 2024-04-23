// import * as React from "react";
// import Paper from "@mui/material/Paper";
// import { Box, Button, Divider, InputBase, Typography } from "@mui/material";
// import {
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TablePagination,
//   TableRow,
//   Table,
//   Stack,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import AddIcon from "@mui/icons-material/Add";
// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
// import SearchIcon from "@mui/icons-material/Search";
// // import VisibilityIcon from "@mui/icons-material/Visibility";
// // import EditIcon from "@mui/icons-material/Edit";
// // import DeleteIcon from "@mui/icons-material/Delete";
// import { useState, useMemo } from "react";
// import { useSelector, useDispatch } from "react-redux";
// // import { selectProject } from "../Store/slice/ProjectsSlice";
// import { setSelectedEmp } from "../Store/slice/EmployeeSlice";

// const columns = [
//   { id: "Name", label: "Name", minWidth: 180 },
//   { id: "Email", label: "Email", minWidth: 170 },

//   {
//     id: "Gender",
//     label: "Gender",
//     minWidth: 110,
//   },
//   {
//     id: "manager",
//     label: "manager",
//     minWidth: 120,
//     // align: "center",
//   },
//   {
//     id: "Department",
//     label: "Department",
//     minWidth: 80,
//     align: "center",
//   },
//   // {
//   //   id: "Inventory",
//   //   label: "Inventory",
//   //   minWidth: 80,
//   //   align: "center",
//   // },
// ];


// export default function EmployeeList({ onAddOrEdit }) {
// //   const Projects = useSelector((state) => state.Project.Projects);
// const { data: employees,isLoading,isError} = useGetEmployeesQuery();

//   // useEffect(() => {
//     console.log("employees:", employees);
//   //   console.log("error:", error);
//   //   console.log("isLoading:", isLoading);
//   // }, [employees, error, isLoading]);

//   // const Employees = useSelector((state) => state.employees.Employees);
//   const Employees= employees || [];
// //   const selectedProject = useSelector((state) => state.Project.selectedProject);
  
// //   console.log("selected project", selectedProject);
//   const dispatch = useDispatch();
//   const Navigate = useNavigate();
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [sortedBy, setSortedBy] = useState("Name"); // Track sorted column
//   const [sortOrder, setSortOrder] = useState("asc"); // Track sort order

//   const [searchText, setsearchText] = useState("");

//   function handleSearchText(event) {
//     setsearchText(event.target.value);
//   }
//   // console.log(searchText);

//   const sortedRows = useMemo(() => {
//     // Sort rows based on sortedBy and sortOrder
//     return Employees.slice().sort((a, b) => {
//       const valueA = a[sortedBy];
//       const valueB = b[sortedBy];

//       if (typeof valueA === "string") {
//         return sortOrder === "asc"
//           ? valueA.localeCompare(valueB)
//           : valueB.localeCompare(valueA);
//       } else {
//         return sortOrder === "asc" ? valueA - valueB : valueB - valueA;
//       }
//     });
//   }, [sortedBy, sortOrder]);

//   const handleSortClick = (columnId) => {
//     const isAscending = sortedBy === columnId && sortOrder === "asc";
//     setSortedBy(columnId);
//     setSortOrder(isAscending ? "desc" : "asc");
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   const FilterArray = sortedRows.filter((project) =>
//     project.Name.toLowerCase().includes(searchText.toLowerCase())
//   );

//   return (
//     <Paper
//       sx={{
//         width: "100%",
//         overflow: "hidden",
//         minHeight: "100%",
//         height: "100%",
//       }}
//     >
//       <Box display={"flex"} justifyContent={"space-between"} m={1}>
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             width: "30%",
//             border: "2px solid rgba(204, 204, 204, 0.5)",
//             borderRadius: "20px",
//           }}
//         >
//           <InputBase
//             sx={{ width: "90%", pl: 2 }}
//             placeholder="Search for Project..."
//             onChange={handleSearchText}
//           />
//           <SearchIcon sx={{ my: "1.5%", mr: 1.5 }} />
//         </Box>

//         <Button
//           variant="contained"
//           sx={{ borderRadius: "50px", textTransform: "none" }}
//           onClick={() => {
//             onAddOrEdit("add");
//             Navigate("/Employee/Employees/EmployeeDetailsForm");
//           }}
//         >
//           Employee
//           <AddIcon />
//         </Button>
//       </Box>
//       <Divider />
//       <TableContainer
//         sx={{ height: "64.5vh", overflow: "auto", scrollbarWidth: "thin" }}
//       >
//         <Table stickyHeader>
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell
//                   key={column.id}
//                   align={column.align}
//                   sx={{ color: "primary.main", minWidth: column.minWidth }}
//                 >
//                   <Stack direction={"row"} alignItems={"center"}>
//                     <Typography fontWeight={550} fontSize={"16px"}>
//                       {column.label}
//                     </Typography>
//                     {column.label === "Name" ? (
//                       <Button
//                         disableRipple
//                         size="small"
//                         onClick={
//                           column.id === "Name"
//                             ? () => handleSortClick(column.id)
//                             : undefined
//                         }
//                       >
//                         {sortOrder === "asc" ? (
//                           <>
//                             <ArrowUpwardIcon />
//                           </>
//                         ) : (
//                           <>
//                             <ArrowDownwardIcon />
//                           </>
//                         )}
//                       </Button>
//                     ) : null}
//                   </Stack>
//                 </TableCell>
//               ))}
//               <TableCell
//                 sx={{ borderBottom: "1.5px solid rgba(204, 204, 204, 0.5)" }}
//               />
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {FilterArray.slice(
//               page * rowsPerPage,
//               page * rowsPerPage + rowsPerPage
//             ).map((row) => {
//               return (
//                 <TableRow
//                   hover
//                   role="checkbox"
//                   tabIndex={-1}
//                   key={row.Name}
//                   ml={2}
//                   sx={{ cursor: "pointer" }}
//                   onClick={() => {
//                     dispatch(setSelectedEmp(row.Id));
//                     Navigate(`/Employee/${row.id}`);
//                   }}
//                 >
//                   {columns.map((column, index) => {
//                     const value = row[column.id];
//                     return (
//                       <TableCell key={index} align={column.align}>
//                         {value}
//                       </TableCell>
//                     );
//                   })}
//                 </TableRow>
//               );
//             })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[5, 10, 20, 100]}
//         component="div"
//         count={Employees.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Paper>
//   );
// }