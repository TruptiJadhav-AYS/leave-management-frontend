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
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useMemo } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Avatar } from "@mui/material";
import Menu from "@mui/material/Menu";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import Profile from "../assets/profile.jpg";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const columns = [
  { id: "name", label: "Name", minWidth: 180 },
  { id: "category", label: "Category", minWidth: 170 },
  {
    id: "serialNo",
    label: "Serial No",
    minWidth: 110,
  },
];

const rows = [
  { name: "Dell", category: "Laptop", serialNo: "76876gbhj8798ui" },
  { name:"HP",category:"Laptop",serialNo:"874385huy87987"},
  { name:"IPhone",category:"Mobile",serialNo:"6bc787hc3827879"}
];

export default function InventoryList() {
  const Navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortedBy, setSortedBy] = useState("Name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEditClick = () => {
    Navigate("/Employee/Employees/EditEmployee");
  };

  const sortedRows = useMemo(() => {
    return rows.slice().sort((a, b) => {
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

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", pb: 1, minHeight: "100%" }}>
      <Box display={"flex"} justifyContent={"space-between"} m={1} mx={1}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "50%",
            border: "2px solid rgba(204, 204, 204, 0.5)",
            borderRadius: "20px",
            mr: "1",
          }}
        >
          <InputBase
            sx={{ width: "90%", pl: 2 }}
            placeholder="Search for User..."
          />
          <SearchIcon sx={{ my: "1%", mr: 1.5 }} />
        </Box>

        <Button
          variant="contained"
          sx={{ borderRadius: "50px", textTransform: "none" }}
          onClick={() => {
            Navigate("/Employee/Employees/EditForm/Inventory");
          }}
        >
          Add Inventory
          <AddIcon />
        </Button>
      </Box>
      <Divider />
      <TableContainer
        sx={{ height: "69vh", overflow: "auto", scrollbarWidth: "thin" }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column,index) => (
                <TableCell
                  key={index}
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
                          column.id === "Name"
                            ? () => handleSortClick(column.id)
                            : undefined
                        }
                      >
                        {sortOrder === "asc" ? (
                          <ArrowUpwardIcon />
                        ) : (
                          <ArrowDownwardIcon />
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
            {sortedRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row,index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                    <TableCell align="center">
                      <Stack direction="row" spacing={0.8}>
                        <VisibilityIcon
                          sx={{ cursor: "pointer" }}
                          onClick={handleClick}
                        />
                        <Menu
                          anchorEl={anchorEl}
                          id="account-menu"
                          open={open}
                          onClose={handleClose}
                          onClick={handleClose}
                          PaperProps={{
                            elevation: 0,
                            sx: {
                              overflow: "visible",
                              filter:
                                "drop-shadow(0px 0px 1px rgba(0,0,0,0.2))",
                              mt: 1.5,
                              "& .MuiAvatar-root": {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                              },
                              "&::before": {
                                content: '""',
                                display: "block",
                                position: "absolute",
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: "background.paper",
                                transform: "translateY(-50%) rotate(45deg)",
                                zIndex: 0,
                              },
                            },
                          }}
                          transformOrigin={{
                            horizontal: "right",
                            vertical: "top",
                          }}
                          anchorOrigin={{
                            horizontal: "right",
                            vertical: "bottom",
                          }}
                        >
                          <Box
                            display={"flex"}
                            flexDirection={"column"}
                            alignItems={"center"}
                            px={7}
                            py={1.5}
                          >
                            <Avatar
                              style={{ width: "60px", height: "60px" }}
                              src={Profile}
                            />
                            <Typography fontWeight={"bold"} mt={1}>
                              {" Pruthviraj Suryavanshi"}
                            </Typography>
                            <Typography variant="subTitle">
                              {"Developer"}
                            </Typography>
                            <Box
                              display={"flex"}
                              gap={0.5}
                              mt={1}
                              flexDirection={"row"}
                            >
                              <MailIcon />
                              <Typography color="textSecondary">
                                {"pruthvi@gmail.com"}
                              </Typography>
                            </Box>
                            <Box item display="flex">
                              <CallIcon />
                              <Typography color="textSecondary">
                                +91 8356789870
                              </Typography>
                            </Box>
                          </Box>
                        </Menu>
                        <EditIcon
                          onClick={handleEditClick}
                          sx={{ cursor: "pointer" }}
                        />
                        <DeleteIcon sx={{ cursor: "pointer" }} />
                      </Stack>
                    </TableCell>
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
