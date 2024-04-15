import React from "react";
import {
  Typography,
  Grid,
  Button,
  Divider,
  InputBase,
  Box,
  Paper
} from "@mui/material";
// import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useSelector } from "react-redux";
import { setSelectedEmp } from "../Store/slice/EmployeeSlice";

export default function EmployeeList() {
  const Navigate = useNavigate();
  const [searchText, setsearchText] = useState("");
  const Employees=useSelector(
    (state) => state.employees.Employees
  );

  function handleSearchText(event) {
    setsearchText(event.target.value);
  }

  const FilterArray = Employees.filter((contact) =>
    contact.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
      <Paper height={"90vh"}>
        <Grid
          container
          sx={{
            width: "100%",
            top: "9%",
            zIndex: 1,
            bgcolor: "white",
            height:"8vh"
          }}
          position={"sticky"}
        >
          <Grid item xs={10}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "98%",
                border: "2px solid rgba(204, 204, 204, 0.5)",
                borderRadius: "10px",
                mr: "1",
              }}
            >
              <InputBase
                sx={{ width: "98%", pl: 2 }}
                placeholder="Search for Employee..."
                onChange={handleSearchText}
              />
              <SearchIcon sx={{ my: "1%", mr: 1.5 }} />
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              sx={{
                borderRadius: "10px",
                backgroundColor: "white",
                color: "black",
              }}
              onClick={() => {
                Navigate("/Employee/Employees/NewRegistration");
              }}
            >
              <AddIcon />
            </Button>
          </Grid>
          <Divider />
        </Grid>

        <Grid
          container
          sx={{
          top:"10%"
          }}
          
        >
          <Grid item xs={12}>
            <Grid

              sx={{
                height:"90vh",
                overflowY: "scroll",
                scrollbarWidth: "thin",
              }}
            >
              {FilterArray.map((contact, index) => (
                <Box key={index}>
                        <ListItem alignItems="flex-start" mx={1}>
                          <Button onClick={()=>{Navigate(`/Employee/${contact.id}`);}}>
                          <Grid container spacing={2}>
                            {/* <Grid item>
                              <Avatar
                                // src={contact.Profile}
                                alt={contact.name}
                              />
                            </Grid> */}
                            <Grid item>
                              <Typography
                                variant="body1"
                                sx={{
                                  textTransform: "none",
                                  color: "black",
                                  fontWeight: "30",
                                }}
                              >
                                {contact.name}
                              </Typography>
                              {/* <Typography
                                variant="caption"
                                sx={{ textTransform: "none", color: "black" }}
                              >
                                {contact.email}
                              </Typography> */}
                            </Grid>
                          </Grid>
                          </Button>
                        </ListItem>
                        </Box>
              ))}
            </Grid>
          </Grid>
        </Grid>
        </Paper>
  );
}

