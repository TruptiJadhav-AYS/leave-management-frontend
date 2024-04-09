import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Divider,
  Button,
  Box,
  List,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import UseReponsive from "../hooks/UseResponsive";
import { Gauge, gaugeClasses } from "@mui/x-charts";
import profile from "../assets/profile.jpg"
import LeavePolicy from "./LeavePolicy";


export default function Dashboard({ role }) {
  const responsive = UseReponsive();
  function createData(name, fromDate, toDate, leaveType, reason,status) {
    return {name, fromDate, toDate, leaveType, reason,status};
  }

  const rows = [
    createData('Pratiksha', "10-04-2024", "10-04-2024", "Half Day", "Doctor appointment"),
    createData('Trupti', "10-04-2024", "10-04-2024", "Half Day", "Doctor appointment"),
    createData('Pruthvi', "10-04-2024", "10-04-2024", "Half Day", "Doctor appointment"),
    createData('Prerana', "10-04-2024", "10-04-2024", "Half Day", "Doctor appointment"),
    createData('Priya', "10-04-2024", "10-04-2024", "Half Day", "Doctor appointment"),
    createData('Riya', "10-04-2024", "10-04-2024", "Half Day", "Doctor appointment"),
  ];

  const handleAccept = (name) => {
    console.log("Accepted", name);
  };

  const handleReject = (name) => {
    console.log("Rejected", name);
  };

  return (
    <Grid container width="100%" px={1} pt={2}>
      <Grid width="100%" height={"100%"}>
        <Grid container spacing={1} height={"17vh"}>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Card
              sx={{
                height: "80%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CardContent>
                <Gauge
                  width={100}
                  height={100}
                  value={10}
                  valueMax={21}
                  startAngle={-110}
                  endAngle={110}
                  sx={{
                    [`& .${gaugeClasses.valueText}`]: {
                      fontSize: 13,
                      transform: "translate(0px, 0px)",
                    },
                  }}
                  text={({ value, valueMax }) => `${value} / ${valueMax}`}
                />
                {/* </CardContent>
            <CardContent> */}
                <Typography>Earned Leave</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Card
              sx={{
                height: "80%", // Adjusted to 100%
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CardContent>
                <Gauge
                  width={100}
                  height={100}
                  value={9}
                  valueMax={21}
                  startAngle={-110}
                  endAngle={110}
                  sx={{
                    [`& .${gaugeClasses.valueText}`]: {
                      fontSize: 13,
                      transform: "translate(0px, 0px)",
                    },
                  }}
                  text={({ value, valueMax }) => `${value} / ${valueMax}`}
                />
                {/* </CardContent>
            <CardContent> */}
                <Typography>Annual Leave</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Card
              sx={{
                height: "80%", // Adjusted to 100%
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CardContent>
                <Gauge
                  width={100}
                  height={100}
                  value={10}
                  valueMax={21}
                  startAngle={-110}
                  endAngle={110}
                  sx={{
                    [`& .${gaugeClasses.valueText}`]: {
                      fontSize: 13,
                      transform: "translate(0px, 0px)",
                    },
                  }}
                  text={({ value, valueMax }) => `${value} / ${valueMax}`}
                />
                <Typography>Total Leave</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid
          container
          pt={2}
          sx={{ height: "69vh", mt: responsive.isMobile ? "10px" : "0px" }}
          rowSpacing={responsive.isMobile ? 1 : 3}
          columnSpacing={1}
        >
          <Grid
            item
            sx={{ height: "100%" }}
            xs={12}
            sm={role === "Manager" || role === "Admin" ? 3 : 6}
            md={role === "Manager" || role === "Admin" ? 3 : 6}
            lg={role === "Manager" || role === "Admin" ? 3 : 6}
          >
            <Card sx={{ height: "100%" }}>
              <CardContent sx={{ position: "sticky", height: "15%" }}>
                <Typography
                  fontWeight={"bold"}
                  textAlign={"left"}
                  fontSize={"16px"}
                >
                  Upcoming Holidays
                </Typography>
              </CardContent>
              <Divider />
              <Box
                sx={{ overflow: "auto", scrollbarWidth: "thin", height: "85%" }}
              >
                <List
                  sx={{
                    width: "100%",
                    height: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                  }}
                >
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar
                          
                        src="/static/images/avatar/1.jpg"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Diwali"
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body1"
                            color="text.primary"
                          >
                            Monday, 20-04-2024
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar
                          
                        src="/static/images/avatar/1.jpg"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Holi"
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body1"
                            color="text.primary"
                          >
                            Monday, 20-04-2024
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar/>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Holi"
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body1"
                            color="text.primary"
                          >
                            Monday, 20-04-2024
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar
                          
                        src="/static/images/avatar/1.jpg"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Holi"
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body1"
                            color="text.primary"
                          >
                            Monday, 20-04-2024
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar
                          
                        src="/static/images/avatar/1.jpg"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Holi"
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body1"
                            color="text.primary"
                          >
                            Monday, 20-04-2024
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar
                          
                        src="/static/images/avatar/1.jpg"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Holi"
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body1"
                            color="text.primary"
                          >
                            Monday, 20-04-2024
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </List>
              </Box>
            </Card>
          </Grid>
          
          {role === "Admin" || role === "Manager" ? (
            //Pending request card
            <Grid item xs={12} sm={9} md={9} lg={9} sx={{ height: "100%" }}>
              <Card sx={{ height: "100%", overflow: "auto" }}>
                <CardContent sx={{ position: "sticky", top: 0, zIndex: 1 }}>
                  <Typography
                    fontWeight={"bold"}
                    textAlign={"left"}
                    fontSize={"16px"}
                  >
                    Pending Requests
                  </Typography>
                </CardContent>
                <Divider />
                <TableContainer
                  component={Paper}
                  sx={{ height: "53.5vh", scrollbarWidth: "thin" }}
                >
                  <Table sx={{ minWidth: 680 }} stickyHeader>
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                        <TableCell align="center" sx={{ fontWeight: "bold" }}>
                          From date
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: "bold" }}>
                          To date
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: "bold" }}>
                          Leave Type
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: "bold" }}>
                          Reason
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ fontWeight: "bold" }}
                        ></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.fromDate}</TableCell>
                          <TableCell align="right">{row.toDate}</TableCell>
                          <TableCell align="right">{row.leaveType}</TableCell>
                          <TableCell align="right">{row.reason}</TableCell>
                          <TableCell align="right">
                            <Button
                              variant="contained"
                              color="success"
                              size="small"
                              onClick={() => handleAccept(row.name)}
                              sx={{ marginRight: 1 }}
                            >
                              Accept
                            </Button>
                            <Button
                              variant="outlined"
                              color="error"
                              size="small"
                              onClick={() => handleReject(row.name)}
                            >
                              Reject
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Card>
            </Grid>
          ) : (
            //Approver Card-"For Employee"

            <Grid item xs={12} sm={6} md={6} lg={6} textAlign="left">
              <Card>
                <CardContent>
                  <Typography fontWeight="bold" fontSize="16px">
                    Approver
                  </Typography>
                </CardContent>
                <Divider/>
                <CardContent>
                <Box display="flex" alignItems="center" justifyContent={"center"} my={1}>
                  <Avatar src={profile} style={{ width: "70px", height: "70px" ,border:"2px solid blue"}} />
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
                  <Grid item  display="flex">
                  <MailIcon/>
                  <Typography pl={0.5}>pratik.23@gmail.com</Typography>
                  </Grid>
                  <Grid item display="flex">
                  <CallIcon/>
                  <Typography >+91 8356789870</Typography>
                  </Grid>
                </Grid>
                </CardContent>
              </Card>

              
              <Grid mt={1}>
              <LeavePolicy/>
              </Grid>
            </Grid>
          )}
          
        </Grid>
      </Grid>
    </Grid>
  );
}
