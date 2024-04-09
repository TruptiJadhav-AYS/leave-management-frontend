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

export default function ApproverCard() {
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
          my={1}
        >
          <Avatar
            src={profile}
            style={{ width: "70px", height: "70px", border: "2px solid blue" }}
          />
          <Box ml={3}>
            <Typography variant="h6"> Pratik Deshmukh</Typography>
            <Typography variant="subtitle1">Project Manager</Typography>
          </Box>
        </Box>

        <Grid
          container
          display="flex"
          width={"100%"}
          justifyContent="space-between"
          textAlign="center"
          py={1}
          px={"3%"}
        >
          <Grid item display="flex">
            <MailIcon />
            <Typography pl={0.5}>pratik.23@gmail.com</Typography>
          </Grid>
          <Grid item display="flex">
            <CallIcon />
            <Typography>+91 8356789870</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
