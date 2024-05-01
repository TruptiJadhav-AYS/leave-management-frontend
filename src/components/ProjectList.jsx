import * as React from "react";
import Paper from "@mui/material/Paper";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  InputBase,
  Typography,
} from "@mui/material";
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
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import SearchIcon from "@mui/icons-material/Search";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useMemo,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectProject } from "../Store/slice/ProjectsSlice";
import { useGetProjectsQuery } from "../Store/slice/apiProjectSlice";

const columns = [
  { id: "name", label: "Name", minWidth: 120 },
  {
    id: "manager",
    label: "Project Manager",
    minWidth: 90,
  },
  {
    id: "startDate",
    label: "Start Date",
    minWidth: 90,
  },
  // {
  //   id: "End_date",
  //   label: "End Date",
  //   minWidth: 90,
  // },
  {
    id: "status",
    label: "Status",
    minWidth: 80,
  },
];

export default function ProjectList({ onProjectAddOrEdit }) {
  const [filteredProjects, setFilteredProjects] = useState([]); // New state for filtered employees
  // const Projects = useSelector((state) => state.Project.Projects);
  const { data: project,isSuccess} = useGetProjectsQuery();
  const Projects = project || [];
  console.log(Projects)
  const selectedProject = useSelector((state) => state.Project.selectedProject);

  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  
  const [searchText, setsearchText] = useState("");
  
  function handleSearchText(event) {
    setsearchText(event.target.value);
  }

  useEffect(() => {
    // Update filteredEmployees when employees data changes
    if (isSuccess) {
      setFilteredProjects(Projects);
    }
  }, [isSuccess, Projects]);
  useEffect(() => {
    // Filter employees based on search text when it changes
    setFilteredProjects(
      Projects.filter((employee) =>
        employee.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [searchText, Projects]);
  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // const FilterArray = sortedRows.filter((project) =>
  //   project.name.toLowerCase().includes(searchText.toLowerCase())
  // );

  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        minHeight: "100%",
        height: "100%",
      }}
    >
      <Box display={"flex"} justifyContent={"space-between"} m={1}>
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
            placeholder="Search for Project..."
            onChange={handleSearchText}
          />
          <SearchIcon sx={{ my: "1.5%", mr: 1.5 }} />
        </Box>

        <Button
          variant="contained"
          sx={{ borderRadius: "50px", textTransform: "none" }}
          onClick={() => {
            onProjectAddOrEdit("add");
            Navigate("/Employee/Projects/OnboardProject");
          }}
        >
          Project
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
                    {/* {column.label === "name" ? (
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
                    ) : null} */}
                  </Stack>
                </TableCell>
              ))}
              <TableCell
                sx={{ borderBottom: "1.5px solid rgba(204, 204, 204, 0.5)" }}
              />
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProjects.slice(
              page * rowsPerPage,
              page * rowsPerPage + rowsPerPage
            ).map((row) => {
              return (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.name}
                  ml={2}
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    dispatch(selectProject(row.id));
                    Navigate(`/Employee/Projects/${row.id}`);
                  }}
                >
                  {columns.map((column, index) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={index} align={column.align}>
                        {column.id==="status" ? value.charAt(0).toUpperCase() + value.slice(1) :column.id==="manager" && value ? value.name: value}
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
        rowsPerPageOptions={[5, 10, 20, 100]}
        component="div"
        count={Projects.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

 // const [sortOrder, setSortOrder] = useState(""); // Track sort order
  // const [sortedBy, setSortedBy] = useState("name"); // Track sorted column
  // console.log(searchText);

  // const sortedRows = useMemo(() => {
  //   // Sort rows based on sortedBy and sortOrder
  //   return Projects.slice().sort((a, b) => {
  //     const valueA = a[sortedBy];
  //     const valueB = b[sortedBy];

  //     if (typeof valueA === "string") {
  //       return sortOrder === "asc"
  //         ? valueA.localeCompare(valueB)
  //         : valueB.localeCompare(valueA);
  //     } else {
  //       return sortOrder === "asc" ? valueA - valueB : valueB - valueA;
  //     }
  //   });
  // }, [sortedBy, sortOrder]);

  // if (isLoading) {
  //   return (
  //     <Grid>
  //       <CircularProgress />
  //     </Grid>
  //   );
  // }
  // if (isError) {
  //   return <></>;
  // }

  // const handleSortClick = (columnId) => {
  //   const isAscending = sortedBy === columnId && sortOrder === "asc";
  //   setSortedBy(columnId);
  //   setSortOrder(isAscending ? "desc" : "asc");
  // };

  // const { data: Employees, isSuccess } = useGetEmployeesQuery();
  // const [searchText, setSearchText] = useState("");
  // const [sortedBy, setSortedBy] = useState("name");
  // const [sortOrder, setSortOrder] = useState("asc");
  // const Navigate = useNavigate();
  // const employees=Employees || [];
  // console.log(employees)

  
