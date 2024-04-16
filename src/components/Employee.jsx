import React from "react";
import {
  Typography,
  Grid,
  Button,
  Divider,
  InputBase,
  Box,
  Paper,
  Card,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useSelector,useDispatch,} from "react-redux";
import { setSelectedEmp } from "../Store/slice/EmployeeSlice";

export default function EmployeeList() {
  const Navigate = useNavigate();
  const [searchText, setsearchText] = useState("");
  const Employees = useSelector((state) => state.employees.Employees);
  const dispatch=useDispatch()
  
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
          top: "10%",
          zIndex: 1,
          bgcolor: "white",
          height: "7.5vh",
          ml: 1,
          pt:1
        }}
        position={"sticky"}
        justifyContent={"space-between"}
      >
        <Grid item xs={10.5}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "40%",
              border: "2px solid rgba(204, 204, 204, 0.5)",
              borderRadius: "10px",
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
        <Grid item xs={1.5}>
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
        {/* <Divider /> */}
      </Grid>

      <Grid
        container
        sx={{
          top: "11%",
          width: "100%",
        }}
      >
        <Grid
          sx={{
            minHeight: "100%",
            overflowY: "scroll",
            scrollbarWidth: "thin",
            minWidth: "100%",
          }}
        >
          {FilterArray.map((contact, index) => (
            <Button
              onClick={() => {
                dispatch(setSelectedEmp(contact.id))
                Navigate(`/Employee/${contact.id}`);
              }}
              sx={{ width: "100%" }}
            >
              <Card
                sx={{  borderRadius: 2, mr: 1, width: "100%" }}
                elevation={3}
                key={index}
              >
                <ListItem alignItems="flex-start" mx={1} > 
                  <Grid container spacing={2} alignItems={"center"}>
                    <Grid item lg={1} md={1}>
                      <Avatar src={contact.Profile} alt={contact.name} />
                    </Grid>
                    <Grid item lg={11} md={11}>
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
                      <Typography
                        variant="caption"
                        sx={{ textTransform: "none", color: "black" }}
                      >
                        {contact.email}
                      </Typography>
                    </Grid>
                  </Grid>
                </ListItem>
              </Card>
            </Button>
          ))}
        </Grid>
      </Grid>
    </Paper>
  );
}
