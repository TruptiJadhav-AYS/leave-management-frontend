import React from "react";
import {
  Card,
  Typography,
  Grid,
  Button,
  Divider,
  InputBase,
  Box,
  Paper
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function EmployeeList() {
  const Navigate = useNavigate();
  const [searchText, setsearchText] = useState("");
  const Employees=useSelector(
    (state) => state.employees.Employees
  );

  console.log(Employees, "MOBILE VIEW")
  function handleSearchText(event) {
    setsearchText(event.target.value);
  }

  const FilterArray = Employees.filter((contact) =>
    contact.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
      <Paper sx={{height:"100%",mt:"5%"}}>
        <Grid
          container
          sx={{
            width: "100%",
            top: "10%",
            zIndex: 1,
            bgcolor: "white",
            height:"5vh"

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
            overflowY: "auto",
            mx: 1,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            bgcolor: "white",
            height: "90vh",
            mt:"11px"
          }}
        >
          <Grid item xs={12}>
            <Grid

              sx={{
                height:"90vh",
                overflowY: "scroll",
                scrollbarWidth: "thin",
                mt:"2%",
                bgcolor:"white"
              }}
            >
              {FilterArray.map((contact) => (
                <Card
                  sx={{ mb: 1, borderRadius: 2, mr:1 }}
                  elevation={3}
                  key={contact.id}
                  
                >
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      {
                        <ListItem alignItems="flex-start" mx={1}>
                          <Grid container spacing={2}>
                            <Grid item>
                              <Avatar
                                // src={contact.Profile}
                                alt={contact.name}
                              />
                            </Grid>
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
                              <Typography
                                variant="caption"
                                sx={{ textTransform: "none", color: "black" }}
                              >
                                {contact.email}
                              </Typography>
                            </Grid>
                          </Grid>
                        </ListItem>
                      }
                    </AccordionSummary>
                    <AccordionDetails>
                      {
                        <Grid container width={"100%"} sx={{pb:2}}>
                          <Grid item xs={12}>
                            <Grid
                              container
                              sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                              }}
                            >
                              <EditIcon
                                fontSize="small"
                                sx={{ mr: 1 }}
                                onClick={() => {
                                  Navigate("/Employee/Employees/EditEmployee");
                                }}
                              />
                              <DeleteIcon fontSize="small" sx={{ mr: 1 }} />
                            </Grid>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography
                              label="Gender"
                              variant="body1"
                              sx={{
                                textTransform: "none",
                                color: "black",
                                fontWeight: "300",
                                display: "flex",
                                mx: 2,
                              }}
                            >
                              <Typography variant="body2" fontWeight={"bold"}>
                                Gender :{
" "}
                              </Typography>
                              {contact.gender}
                            </Typography>
                            <Typography
                              label="Department"
                              variant="body2"
                              sx={{
                                textTransform: "none",
                                color: "black",
                                fontWeight: "300",
                                display: "flex",
                                mx: 2,
                              }}
                            >
                              <Typography variant="body2" fontWeight={"bold"}>
                                Department :{
" "}
                              </Typography>
                              {contact.department}
                            </Typography>
                            <Typography
                              label="Manager"
                              variant="body2"
                              sx={{
                                textTransform: "none",
                                color: "black",
                                display: "flex",
                                mx: 2,
                              }}
                            >
                              <Typography variant="body2" fontWeight={"bold"}>
                                Manager :{
" "}
                              </Typography>
                              {contact.manager}
                            </Typography>
                          </Grid>
                        </Grid>
                      }
                    </AccordionDetails>
                  </Accordion>
                </Card>
              ))}
            </Grid>
          </Grid>
        </Grid>
        </Paper>

  );
}

