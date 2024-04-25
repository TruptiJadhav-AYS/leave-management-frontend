import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  IconButton,
  Card,
  CardContent,
  Typography,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from "@mui/material/Avatar";
import { useDispatch } from "react-redux";
import deleteEmployee from "../Store/action/DeleteEmployee";
import { useState } from "react";
import employeeApi, { useDeleteEmployeeMutation, useGetEmployeesQuery } from '../Store/slice/apiEmployeeSlice';
import { useGetProjectsQuery,useAssignProjectMutation } from "../Store/slice/apiProjectSlice"; 

export default function EmployeeDetails({ onAddOrEdit }) {
  const { data: Employees,isLoading,isError} = useGetEmployeesQuery();
  const {data: project}=useGetProjectsQuery()
  let [selectedProject,setSelectedProject]=useState("")
  const [assignProject]=useAssignProjectMutation()

  const Project=project || []
  const selectedEmp = useSelector((state) => state.employees.selectedEmp);

  const [deleteEmployee] = useDeleteEmployeeMutation();
  const Navigate = useNavigate();
  const index = Employees.findIndex((contact) => contact.id === selectedEmp);

  function handelAssign(projectId){
    const projectObj={
      employeeId:selectedEmp,
      projectId:projectId
    }
    assignProject(projectObj)
  }

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
      <Card elevation={2}>
        <Grid display={"flex"} justifyContent={"space-between"} mx={2}>
          <Typography
            variant="h5"
            display="flex"
            justifyContent="left"
            alignItems={"left"}
            mt={3}
            width="100%"
          >
            Employee Details
          </Typography>

          <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-autowidth-label">Select Project</InputLabel>
          <Select
          size="small"
          onChange={(e)=>setSelectedProject(e.target.value)}
           sx={{
            "& fieldset": {
              borderColor: "rgba(204, 204, 204, 0.5)",
              borderWidth: "2px",
            },
            "&:hover": {
              "&& fieldset": {
                border: "2px solid rgba(204, 204, 204, 0.5)",
              },
            },
            height: "50px",
            width:"200px",
            mr:"100px",
            borderRadius: 1,
          }}
          >
            {Project.map((project)=>
              <MenuItem key={project.id} value={project.id}>
              {project.name}
              </MenuItem>
            )}
          </Select>
          </FormControl>

          <Button onClick={()=>handelAssign(selectedProject)}>
            Assign
          </Button>
          <IconButton
            onClick={() => {
              onAddOrEdit("edit");
              Navigate("/Employee/Employees/EmployeeDetailsForm");
            }}
          >
            <EditIcon/>
          </IconButton>
          <IconButton
            onClick={() => {
              deleteEmployee(selectedEmp)
              Navigate("/Employee/Employees");             
            }}
          >
            <DeleteIcon/>
          </IconButton>
        </Grid>
        <CardContent>
          <Grid
            container
            justifyContent={"space-around"}
            align={"center"}
            columnGap={12}
          >
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Avatar sx={{ width: 124, height: 124 }} />
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Typography variant="body1" mt={8} fontWeight={"700"}>
                Name : {Employees[index].name}
              </Typography>
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Typography
                variant="caption"
                fontWeight={"600"}
                align="left"
                // justifyContent={"left"}
              >
                Email : {Employees[index].email}
              </Typography>
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Typography variant="caption" fontWeight={"600"}>
                Phone No : {Employees[index].mobile_number}
              </Typography>
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Typography variant="caption" fontWeight={"600"} align="left">
                Date Of Birth : {Employees[index].dob}
              </Typography>
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Typography variant="caption" fontWeight={"600"} align="left">
                Gender : {Employees[index].gender}
              </Typography>
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Typography variant="caption" fontWeight={"600"}>
                Department : {Employees[index].department?.department_name}
              </Typography>
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              {Employees[index].manager && 
              <Typography variant="caption" fontWeight={"600"}>
                Manager Name : {Employees[index].manager?.name}
              </Typography>
              }
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Typography variant="caption" fontWeight={"600"}>
                Role : {Employees[index].role}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}
