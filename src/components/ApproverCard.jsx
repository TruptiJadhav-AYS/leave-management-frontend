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

export default function ApproverCard() {
  let responsive=UseReponsive()

  return (
    <Card>
      <CardContent>
        <Typography fontWeight="bold" fontSize="16px">
          Approver
        </Typography>
      </CardContent>
      <Divider />
      <CardContent>
        <Box
          display="flex"
          alignItems="center"
          justifyContent={"center"}
          my={responsive.isMobile ? 2 :0.8}
        >
          <Avatar
            src={profile}
            style={{ width:responsive.isMobile ? "50px" :"70px", height:responsive.isMobile ? "50px" : "70px", border: "2px solid blue" }}
          />
          <Box px={6} display={"flex"} flexDirection={"column"}>
            <Typography fontSize={responsive.isDesktop ? "19px" : "16px"}> Pratik Deshmukh</Typography>
            <Typography variant={responsive.isDesktop ? "subtitle1" : "subtitle2"}>Project Manager</Typography>
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
            <Typography variant={responsive.isMobile ? "subtitle2" : "15px"}>pratik.23@gmail.com</Typography>
          </Grid>
          <Grid item display="flex">
            <CallIcon />
            <Typography variant={responsive.isMobile ? "subtitle2" : "15px"}>+91 8356789870</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
