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
import ListItem from "@mui/material/ListItem";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { selectProject } from "../Store/slice/ProjectsSlice";
import { useState,useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux'
import { useDeleteProjectMutation, useGetProjectsQuery } from "../Store/slice/apiProjectSlice";

export default function ContactsList() {
  // const Projects =useSelector(state=>state.Project.Projects)
  const [filteredProjects, setFilteredEmployees] = useState([]); // New state for filtered employees

  // console.log("Ppppppppppppppppprojects" , Projects)
  const Navigate = useNavigate();
  const [searchText, setsearchText] = useState("");

  function handleSearchText(event) {
    setsearchText(event.target.value);
  }
  console.log(searchText);
  const { data: project,isSuccess } = useGetProjectsQuery();
  console.log(project);
  const Projects = project || [];
  const selectedProject = useSelector((state) => state.Project.selectedProject);
  console.log("selected project", selectedProject);
  const dispatch = useDispatch();

  function handleSearchText(event) {
    setsearchText(event.target.value);
  }

  useEffect(() => {
    // Update filteredEmployees when employees data changes
    if (isSuccess) {
      setFilteredEmployees(Projects);
    }
  }, [isSuccess, Projects]);

  useEffect(() => {
    setFilteredEmployees(
      Projects.filter((employee) =>
        employee.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [searchText, Projects]);

  
  const formatDate = (timestampString) => {
    const date = new Date(timestampString);
    const year = date.getFullYear();
    const day = date.getDate().toString().padStart(2, "0");

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const formattedDate = `${day} ${monthNames[date.getMonth()]} ${year}`;

    return formattedDate;
  };


  return (
    <Paper sx={{ height: "80vh", mt: "5%" }}>
      <Grid
        container
        sx={{
          width: "100%",
          top: "10%",
          zIndex: 1,
          bgcolor: "white",
          height: "5vh"

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
              placeholder="Search for Project..."
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
              Navigate("/Employee/Projects/OnboardProject");
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
          mt: "11px"
        }}
      >
        <Grid item xs={12}>
          <Grid
            sx={{
              height: "90vh",
              overflowY: "scroll",
              scrollbarWidth: "thin",
              mt: "2%",
              bgcolor: "white"
            }}
          >
            {filteredProjects.map((project,index) => (
              <Card
                sx={{ mb: 1, borderRadius: 2, mr: 1 ,cursor:"pointer"}}
                elevation={3}
                key={index}
                onClick={() => {
                  dispatch(selectProject(project.id));
                  Navigate(`/Employee/Projects/${project.id}`);
                }}
              >
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
                        {project.name}
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
                          Project Manager :
                        </Typography>
                        {project.manager.name}
                      </Typography>
                      <br/>
                      <Typography
                        variant="caption"
                        sx={{ textTransform: "none", color: "black" }}
                      >
                        <Typography
                          variant="caption"
                          fontWeight={"bold"}
                          mr={1}
                        >
                          Start Date :
                        </Typography>
                        {formatDate(project.startDate)}
                      </Typography>
                    </Grid>
                  </Grid>
                </ListItem>          
                </Card>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Paper>

  );
}