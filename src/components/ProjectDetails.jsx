import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useDispatch } from "react-redux";
import { useState } from "react";
import deleteProjectAction from "../Store/action/DeleteProjectAction";

export default function ProjectDetails({ onProjectAddOrEdit }) {
  const Projects =useSelector(state=>state.Project.Projects)
  const selectedProject = useSelector((state) => state.Project.selectedProject);
  let [deleteDialogue,setdeleteDialogue]=useState()
  const dispatch = useDispatch();

  const Navigate = useNavigate();

  const index = Projects.findIndex((project) => project.Id === selectedProject);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "70vh",
        top: "10%",
      }}
    >
      <Card elevation={2} sx={{minHeight:"89.5vh"}}>
        <Grid display={"flex"} justifyContent={"space-between"} mx={2}>
          <Typography
            variant="h5"
            display="flex"
            justifyContent="left"
            alignItems={"left"}
            mt={3}
            width="100%"
          >
            Project Details
          </Typography>
          <Button
            onClick={() => {
              onProjectAddOrEdit("edit");
              Navigate("/Employee/Projects/OnboardProject");
            }}
          >
            edit
          </Button>
          <Button
            onClick={() => {
              dispatch(deleteProjectAction());
              Navigate("/Employee/Projects");             
            }}
          >
            Delete
          </Button>
        </Grid>
        <CardContent>
          <Grid
            container
            justifyContent={"space-around"}
            align={"center"}
            columnGap={12}
          >
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Typography variant="body1" mt={8} fontWeight={"700"}>
                Project Name : {Projects[index].Name}
              </Typography>
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Typography
                variant="caption"
                fontWeight={"600"}
                align="left"
                // justifyContent={"left"}
              >
                Project Manager : {Projects[index].Project_Manager}
              </Typography>
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Typography variant="caption" fontWeight={"600"}>        
                Start Date : {Projects[index].Start_date}
              </Typography>
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Typography variant="caption" fontWeight={"600"} align="left">
                Description : {Projects[index].Description}
              </Typography>
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Typography variant="caption" fontWeight={"600"} align="left">
                Status : {Projects[index].Status}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}