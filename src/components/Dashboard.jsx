import React from "react";
import { Grid, Typography, Card, CardContent, Divider,Button } from "@mui/material";
import UseReponsive from "../hooks/UseResponsive";
import { Gauge, gaugeClasses } from "@mui/x-charts";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, fromDate, toDate, leaveType, reason,status) {
  return {name, fromDate, toDate, leaveType, reason,status};
}

const rows = [
  createData('Pratiksha', "10-04-2024", "10-04-2024", "Half Day", "Doctor appointment"),
  createData('Trupti', "10-04-2024", "10-04-2024", "Half Day", "Doctor appointment"),
  createData('Pruthvi', "10-04-2024", "10-04-2024", "Half Day", "Doctor appointment"),
  createData('Prerana', "10-04-2024", "10-04-2024", "Half Day", "Doctor appointment"),
];

const handleAccept = (name) => {
  console.log("Accepted", name);
  // Here, you would typically update the status of the request in your application's state or backend
};

const handleReject = (name) => {
  console.log("Rejected", name);
  // Similarly, update the status accordingly
};

export default function Dashboard({ role }) {
  const responsive = UseReponsive();

  return (
    <Grid container width="100%" p={1}>
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
          height={"50%"}
          sx={{ mt: responsive.isMobile ? "10px" : "0px" }}
          rowSpacing={responsive.isMobile ? 1 : 3}
          columnSpacing={1}
        >
          <Grid
            item
            xs={12}
            sm={role === "manager" || role === "Admin" ? 3 : 6}
            md={role === "manager" || role === "Admin" ? 3 : 6}
            lg={role === "manager" || role === "Admin" ? 3 : 6}
          >
            <Card>
              <CardContent>
                <Typography fontWeight={"bold"} textAlign={"left"} fontSize={"16px"}>
                  Upcoming Holidays
                </Typography>
              </CardContent>
              <Divider />

              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
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
                      alt="Remy Sharp"
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
                      alt="Remy Sharp"
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
                      alt="Remy Sharp"
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
            </Card>
          </Grid>
          {role === "Admin" || role === "Manager" ? (
            <Grid item xs={12} sm={9} md={9} lg={9}>
              <Card>
                <CardContent>
                  <Typography fontWeight={"bold"} textAlign={"left"} fontSize={"16px"}>
                    Pending Requests
                  </Typography>
                </CardContent>
                <Divider />
                <TableContainer component={Paper}>
      <Table sx={{ minWidth: 680 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>From date</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>To date</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Leave Type</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Reason</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.fromDate}</TableCell>
              <TableCell align="right">{row.toDate}</TableCell>
              <TableCell align="right">{row.leaveType}</TableCell>
              <TableCell align="right">{row.reason}</TableCell>
              <TableCell align="right"><Button 
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
        </Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                {/* Content of pending requests */}
              </Card>
            </Grid>
          ) : (
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Card>
                <CardContent>
                  <Typography fontWeight={"bold"} fontSize={"16px"} textAlign={"left"}>
                    Approver
                  </Typography>
                </CardContent>
                <Divider />
              </Card>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
