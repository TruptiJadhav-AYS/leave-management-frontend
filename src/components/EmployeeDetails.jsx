import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
// import { Dispatch } from "@reduxjs/toolkit";
import { Box, Button, Card, CardContent, Typography, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { setSelectedEmp } from "../Store/slice/EmployeeSlice";

export default function EmployeeDetails() {
  const Employees = useSelector((state) => state.employees.Employees);
  const selectedEmp=useSelector((state)=>state.employees.selectedEmp)

  const Navigate=useNavigate()

  const index = Employees.findIndex((contact) => contact.id === selectedEmp);

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
        <Typography
          variant="h5"
          display="flex"
          justifyContent="left"
          alignItems={"left"}
          ml={2}
          mt={3}
          width="100%"
        >
          Employee Details
        </Typography>
        <CardContent>
          <Grid container justifyContent={"space-around"} align={'center'} columnGap={12}>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Avatar  sx={{ width: 124, height: 124 }}/>
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
              <Typography variant="caption" fontWeight={"600"} >
                Phone No : {Employees[index].mobile_no}
              </Typography>
              </Grid>
              <Grid item lg={12} md={12} xs={12} sm={12}>
              <Typography variant="caption" fontWeight={"600"} align="left" >
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
