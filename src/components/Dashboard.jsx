import React from "react";
import { Grid, Typography, Card, CardContent, Divider } from "@mui/material";
import UseReponsive from "../hooks/UseResponsive";
import { Gauge, gaugeClasses } from "@mui/x-charts";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";

export default function Dashboard({ role }) {
  const responsive = UseReponsive();

  return (
    <Grid
      container
      height={"100vh"} // Changed to 100vh
      width="100%"
      sx={{ minHeight: "92vh" }}
      pt={"9vh"}
      mx={3}
    >
      <Typography
        fontSize={"22px"}
        textAlign={"left"}
        color={"primary"}
        width="95%"
        // bgcolor={"red"}
        height={"5vh"}
      >
        Welcome Rajesh !!!
      </Typography>
      <Grid container spacing={3} height={"18vh"} > {/* Adjusted height */}
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Card
            sx={{
              height: "80%", // Adjusted to 100%
              display: "flex",
              // bgcolor:"yellow",
              
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
        <Grid item xs={12} sm={4} md={4} lg={4}>
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
        <Grid item xs={12} sm={4} md={4} lg={4}>
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
            {/* </CardContent>
            <CardContent> */}
              <Typography>Total Leave</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3} pt={2} height={"50%"} sx={{mt:responsive.isMobile ? "420px" : "0px"}} > {/* Adjusted height */}
        <Grid item xs={12} sm={6} md={6} lg={6} >
          <Card
          >
            <CardContent>
              <Typography fontWeight={"bold"} fontSize={"16px"}>
                Upcoming Holidays
              </Typography>
            </CardContent>
            <Divider />
            <CardContent>
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
            </CardContent>
          </Card>
        </Grid>

        {role === "Admin" || role === "Manager" ? (
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Card
              // sx={{
              //   height: "100%", // Adjusted to 100%
              // }}
            >
              <CardContent>
                <Typography fontWeight={"bold"} fontSize={"16px"}>
                  Pending Requests
                </Typography>
              </CardContent>
              <Divider />
              {/* Content of pending requests */}
            </Card>
          </Grid>
        ) : null}
      </Grid>
    </Grid>
  );
}
