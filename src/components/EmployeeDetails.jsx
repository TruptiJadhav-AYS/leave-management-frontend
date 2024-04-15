import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
// import { Dispatch } from "@reduxjs/toolkit";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default function EmployeeDetails() {
  const params = useParams();
  const selectedUser = parseInt(params.id);
  const Employees = useSelector((state) => state.employees.Employees);

  const index = Employees.findIndex((contact) => contact.id === selectedUser);
  console.log(Employees[index]);

  return (
    <Box  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh'}}>
      
      <Card elevation={2}>
      <Typography variant="h5" display= 'flex' justifyContent= 'left' alignItems={'left'} ml={2} mt={1}>Employee Details</Typography>
        <CardContent sx={{ alignItems:'left', justifyContent:'left'}}>
          <Typography variant="h6">id : {Employees[index].id}</Typography>
          <Typography variant="h6">Name : {Employees[index].name}</Typography>
          <Typography variant="h6">Email : {Employees[index].email}</Typography>
          <Typography variant="h6">
            Date Of Birth : {Employees[index].dob}
          </Typography>
          <Typography variant="h6">
            Phone No : {Employees[index].mobile_no}
          </Typography>
          <Typography variant="h6">
           Gender : {Employees[index].gender}
          </Typography>
          <Typography variant="h6">
            Department : {Employees[index].department}
          </Typography>
          <Typography variant="h6">
            Manager Name: {Employees[index].manager}
          </Typography>
          <Typography variant="h6">
            Role : {Employees[index].role}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
