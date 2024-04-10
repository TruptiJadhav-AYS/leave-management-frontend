import React from "react";
import {
  Card,
  Typography,
  Grid,
  Button,
  Divider,
  InputBase,
  Box,
} from "@mui/material";
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

const contacts = [
  {
    Name: "Employee Management System",
    Project_Manager: "Ketan Rathod",
    Start_date: "20-04-2024",
    End_date: "20-07-2024",
    Status: "Active",
    // Assign: 1,
  },
  {
    Name: "Horeca",
    Project_Manager: "Prashil Sir",
    Start_date: "20-04-2024",
    End_date: "20-07-2024",
    Status: "Active",
    // Assign: 1,
  },
  {
    Name: "Bloqcube",
    Project_Manager: "Mehvish Shaikh",
    Start_date: "20-04-2024",
    End_date: "20-07-2024",
    Status: "Active",
    // Assign: 1,
  },
  {
    Name: "Zopto",
    Project_Manager: "Abhishek Shinde",
    Start_date: "20-04-2024",
    End_date: "20-07-2024",
    Status: "Active",
    // Assign: 1,
  },
  {
    Name: "Leave Management",
    Project_Manager: "Pratiksha Nimbalkar",
    Start_date: "20-04-2024",
    End_date: "20-07-2024",
    Status: "Active",
    // Assign: 1,
  },
  {
    Name: "Whatsapp Clone",
    Project_Manager: "Prerana Divekar",
    Start_date: "20-04-2024",
    End_date: "20-07-2024",
    Status: "Active",
    // Assign: 1,
  },
  {
    Name: "Pruthviraj Suryawanshi",
    Project_Manager: "Pruthvi",
    Start_date: "20-04-2024",
    End_date: "20-07-2024",
    Status: "Active",
    // Assign: 1,
  },
  {
    Name: "Pruthviraj Suryawanshi",
    Project_Manager: "Pruthvi",
    Start_date: "20-04-2024",
    End_date: "20-07-2024",
    Status: "Active",
    // Assign: 1,
  },
  {
    Name: "Pruthviraj Suryawanshi",
    Project_Manager: "Pruthvi",
    Start_date: "20-04-2024",
    End_date: "20-07-2024",
    Status: "Active",
    // Assign: 1,
  },
  {
    Name: "Pruthviraj Suryawanshi",
    Project_Manager: "Pruthvi",
    Start_date: "20-04-2024",
    End_date: "20-07-2024",
    Status: "Active",
    // Assign: 1,
  },
  {
    Name: "Pruthviraj Suryawanshi",
    Project_Manager: "Pruthvi",
    Start_date: "20-04-2024",
    End_date: "20-07-2024",
    Status: "Active",
    // Assign: 1,
  },
  {
    Name: "Pruthviraj Suryawanshi",
    Project_Manager: "Pruthvi",
    Start_date: "20-04-2024",
    End_date: "20-07-2024",
    Status: "Active",
    // Assign: 1,
  },
  {
    Name: "Pruthviraj Suryawanshi",
    Project_Manager: "Pruthvi",
    Start_date: "20-04-2024",
    End_date: "20-07-2024",
    Status: "Active",
    // Assign: 1,
  },
  {
    Name: "Pruthviraj Suryawanshi",
    Project_Manager: "Pruthvi",
    Start_date: "20-04-2024",
    End_date: "20-07-2024",
    Status: "Active",
    // Assign: 1,
  },
  {
    Name: "Pruthviraj Suryawanshi",
    Project_Manager: "Pruthvi",
    Start_date: "20-04-2024",
    End_date: "20-07-2024",
    Status: "Active",
    // Assign: 1,
  },
  {
    Name: "Pruthviraj Suryawanshi",
    Project_Manager: "Pruthvi",
    Start_date: "20-04-2024",
    End_date: "20-07-2024",
    Status: "Active",
    // Assign: 1,
  },
  {
    Name: "Pruthviraj Suryawanshi",
    Project_Manager: "Pruthvi",
    Start_date: "20-04-2024",
    End_date: "20-07-2024",
    Status: "Active",
    // Assign: 1,
  },
  // Add more rows as needed...
];

export default function ProjectMbList() {
  const Navigate = useNavigate();
  const [searchText, setsearchText] = useState("");

  function handleSearchText(event) {
    setsearchText(event.target.value);
  }
  console.log(searchText);

  const FilterArray = contacts.filter((contact) =>
    contact.Name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Grid itme xs={12}>
      <Grid
        container
        sx={{
          height: "10vh",
          pt: 1,
          width: "100%",
          top: "10%",
          zIndex: 1,
          bgcolor: "white",
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
              placeholder="Search for Project ..."
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
        }}
      >
        <Grid item xs={12}>
          {FilterArray.map((contact) => (
            <Card
              sx={{ mb: 1, borderRadius: 2 }}
              elevation={3}
              key={contact.id}
              mx={1}
              fullWidth
            >
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  {
                    <ListItem alignItems="flex-start" fullWidth mx={1}>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <Typography
                            variant="body1"
                            sx={{
                              textTransform: "none",
                              color: "black",
                              fontWeight: "530",
                            }}
                          >
                            {contact.Name}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{ textTransform: "none", color: "black" }}
                          >
                            <Typography
                              variant="caption"
                              fontWeight={"bold"}
                              mr={1}
                            >
                              Project_Manager :
                            </Typography>
                            {contact.Project_Manager}
                          </Typography>
                        </Grid>
                      </Grid>
                    </ListItem>
                  }
                </AccordionSummary>
                <AccordionDetails>
                  {
                    <Grid container width={"100%"}>
                      <Grid item xs={12}>
                        <Grid
                          container
                          sx={{ display: "flex", justifyContent: "flex-end" }}
                        >
                          <EditIcon fontSize="small" sx={{ mr: 1 }} />
                          <DeleteIcon fontSize="small" />
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          label="Start_date"
                          variant="body1"
                          sx={{
                            textTransform: "none",
                            color: "black",
                           
                            display: "flex",
                            mx: 2,
                          }}
                        >
                          <Typography variant="body1" fontWeight={"bold"}>
                            Start_date :{" "}
                          </Typography>
                          {contact.Start_date}
                        </Typography>
                        <Typography
                          label="End_date"
                          variant="body1"
                          sx={{
                            textTransform: "none",
                            color: "black",
                            display: "flex",
                            mx: 2,
                          }}
                        >
                          <Typography variant="body1" fontWeight={"bold"}>
                            End_date :{" "}
                          </Typography>
                          {contact.End_date}
                        </Typography>
                        <Typography
                          label="Status"
                          variant="body1"
                          sx={{
                            textTransform: "none",
                            color: "black",
                          
                            display: "flex",
                            mx: 2,
                          }}
                        >
                          <Typography variant="body1" fontWeight={"bold"}>
                            Status :{" "}
                          </Typography>
                          {contact.Status}
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
  );
}
