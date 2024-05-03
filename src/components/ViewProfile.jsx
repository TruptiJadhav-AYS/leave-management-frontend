import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { useGetEmployeesByIdQuery } from "../Store/slice/apiEmployeeSlice";
// import { useNavigate } from "react-router-dom";
// import deleteEmployee from "../Store/action/DeleteEmployee";
// import { useDeleteEmployeeMutation, useGetEmployeesQuery } from '../Store/slice/apiEmployeeSlice';

export default function ViewProfile({ onAddOrEdit }) {
  // let [deleteDialogue,setdeleteDialogue]=useState()
  // const [deleteEmployee] = useDeleteEmployeeMutation();
  // const dispatch = useDispatch();
  // const Navigate = useNavigate();
  const id=useSelector((state)=>state.employees.logedInEmp)
  console.log(id)
  const {data:Emp}=useGetEmployeesByIdQuery(id)
  const logedInEmp=Emp || []
  console.log(logedInEmp)

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
                Name : {logedInEmp.name}
              </Typography>
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Typography
                variant="caption"
                fontWeight={"600"}
                align="left"
                // justifyContent={"left"}
              >
                Email : {logedInEmp.email}
              </Typography>
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Typography variant="caption" fontWeight={"600"}>
                Phone No : {logedInEmp.mobile_number}
              </Typography>
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Typography variant="caption" fontWeight={"600"} align="left">
                Date Of Birth : {logedInEmp.dob}
              </Typography>
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Typography variant="caption" fontWeight={"600"} align="left">
                Gender : {logedInEmp.gender}
              </Typography>
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Typography variant="caption" fontWeight={"600"}>
                Department : {logedInEmp.department}
              </Typography>
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Typography variant="caption" fontWeight={"600"}>
                Manager Name : {logedInEmp.manager}
              </Typography>
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Typography variant="caption" fontWeight={"600"}>
                Role : {logedInEmp.role}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}
