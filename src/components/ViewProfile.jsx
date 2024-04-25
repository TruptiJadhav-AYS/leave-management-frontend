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
import deleteEmployee from "../Store/action/DeleteEmployee";
import { useState } from "react";
// import { useDeleteEmployeeMutation, useGetEmployeesQuery } from '../Store/slice/apiEmployeeSlice';
import { useGetEmployeesQuery } from "../Store/slice/apiEmployeeSlice";

export default function ViewProfile({ onAddOrEdit, logedInUser }) {
  // const Employees = useSelector((state) => state.employees.Employees);
  const { data: Employees,isLoading,isError} = useGetEmployeesQuery();
//   const selectedEmp = useSelector((state) => state.employees.selectedEmp);
//   console.log(typeof selectedEmp)
  // let [deleteDialogue,setdeleteDialogue]=useState()
//   const [deleteEmployee] = useDeleteEmployeeMutation();
  const dispatch = useDispatch();
  const Navigate = useNavigate();

//   const index = Employees.findIndex((contact) => contact.id === selectedEmp);
//   let manager=Employees.findIndex((emp) => emp.manager_id === Employees[index].id)
//   let manager_name=manager.name
    const index = Employees.findIndex((contact) => contact.email === logedInUser );

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
            variant="h4"
            display="flex"
            justifyContent="left"
            alignItems={"left"}
            mt={3}
            width="100%"
          >
            Profile
          </Typography>
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
                Department : {Employees[index].department}
              </Typography>
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Typography variant="caption" fontWeight={"600"}>
                Manager Name : {Employees[index].manager}
              </Typography>
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
