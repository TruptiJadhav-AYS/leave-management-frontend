import {
  Card,
  CardContent,
  Typography,
  Divider,
  Box,
  Avatar,
  Grid,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import profile from "../assets/profile.jpg";
import UseReponsive from "../hooks/UseResponsive";
import { useSelector } from "react-redux";
import { useGetEmployeesQuery } from "../Store/slice/apiEmployeeSlice";

export default function ApproverCard() {
  let responsive = UseReponsive();

  const id = useSelector((state) => state.employees.userId);
  const { data: emp, isLoading, isError } = useGetEmployeesQuery();

  if (isLoading || isError || !emp) {
    return null;
  }

  const employee = emp.find((employee) => employee.id === id);

  if (!employee) {
    return null;
  }

  return (
    <Card>
      <CardContent>
        <Typography fontWeight="bold" fontSize="16px">
          Details
        </Typography>
      </CardContent>
      <Divider />
      <CardContent>
        <Box
          display="flex"
          alignItems="center"
          justifyContent={"center"}
          my={responsive.isMobile ? 2 : 0.8}
        >
          <Avatar
            // src={employee.image.data}
            src={URL.createObjectURL(
              new Blob([new Uint8Array(employee.image.data)])
            )}
            style={{
              width: responsive.isMobile ? "50px" : "70px",
              height: responsive.isMobile ? "50px" : "70px",
              border: "2px solid blue",
            }}
          />
          <Box px={6} display={"flex"} flexDirection={"column"}>
            <Typography fontSize={responsive.isDesktop ? "19px" : "16px"}>
              {employee ? employee.name : ""}
            </Typography>
            <Typography
              variant={responsive.isDesktop ? "subtitle1" : "subtitle2"}
            >
              {employee ? employee.role : ""}
            </Typography>
          </Box>
        </Box>

        <Grid
          container
          display="flex"
          width={"100%"}
          justifyContent="space-between"
          textAlign="center"
          py={0.5}
          px={responsive.isMobile ? "5%" : "10%"}
        >
          <Grid item display="flex" px={0.5}>
            <MailIcon />
            <Typography variant={responsive.isMobile ? "subtitle2" : "15px"}>
              {employee ? employee.email : ""}
            </Typography>
          </Grid>
          <Grid item display="flex">
            <CallIcon />
            <Typography variant={responsive.isMobile ? "subtitle2" : "15px"}>
              {employee ? employee.mobile_number : ""}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
