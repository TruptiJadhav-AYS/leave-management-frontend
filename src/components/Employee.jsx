import * as React from "react";
import Paper from "@mui/material/Paper";
import { Box, Button, InputBase } from "@mui/material";
import {TableBody, TableCell, TableContainer,TableHead, TablePagination, TableRow, Table} from "@mui/material"
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SearchIcon from '@mui/icons-material/Search'
import { useState, useMemo } from "react";

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
    align: "center",
  },
  {
    id: "DepartmentId",
    label: "DepartmentId",
    minWidth: 80,
    align: "center",
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
    ManagerId: 1,
    DepartmentId: 1,
  },
  {
    Name: "Yogesh Patel",
    Email: "yogesh@gmail.com",
    Role: "Admin",
    Gender: "Male",
    ManagerId: 1,
    DepartmentId: 1,
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
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortedBy, setSortedBy] = useState(null); // Track sorted column
  const [sortOrder, setSortOrder] = useState('asc'); // Track sort order

  const sortedRows = useMemo(() => {
    // Sort rows based on sortedBy and sortOrder
    return rows.slice().sort((a, b) => {
      const valueA = a[sortedBy];
      const valueB = b[sortedBy];

      if (typeof valueA === 'string') {
        return sortOrder === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
      } else {
        return sortOrder === 'asc' ? valueA - valueB : valueB - valueA;
      }
    });
  }, [rows, sortedBy, sortOrder]);

  const handleSortClick = (columnId) => {
    const isAscending = (sortedBy === columnId && sortOrder === 'asc');
    setSortedBy(columnId);
    setSortOrder(isAscending ? 'desc' : 'asc');
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", py: 2, minHeight:"100%" }}>
      <Box display={"flex"} justifyContent={"space-between"} marginX={2}>
        <Box sx={{ display:"flex" , justifyContent:"space-between", width: "50%", border: "1px solid black", borderRadius: "20px", mr:"1" }}>
          <InputBase
            sx={{ width: "90%" }}
            placeholder="   Search for User..."
          />
          <SearchIcon sx={{ mt: "1%" }} />
        </Box>

        <Button
          variant="contained"
          sx={{ borderRadius: "50px" }}
          onClick={() => {
            Navigate("/Employee/Employees/NewRegistration");
          }}
        >
          Employee
          <AddIcon />
        </Button>
      </Box>

      <TableContainer sx={{ height: "70vh",overflow:"auto" ,scrollbarWidth:"thin"}}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  sx={{ color: "primary.main", minWidth:column.minWidth }}
                  onClick={() => handleSortClick(column.id)}
                >
                  {sortedBy === column.id ? (
                    sortOrder === 'asc' ? (
                      <>{column.label} <ArrowUpwardIcon /></>
                    ) : (
                      <>{column.label} <ArrowDownwardIcon /></>
                    )
                  ) : (
                    column.label
                  )}

                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedRows
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
        rowsPerPageOptions={[5, 10, 20, 100]}
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