import React from "react";
import { Grid, Typography, Card, CardContent, Divider } from "@mui/material";
import UseReponsive from "../hooks/UseResponsive";
import { Gauge } from '@mui/x-charts';

export default function Dashboard({ role }) {
  let responsive = UseReponsive();

  return (
    <Grid
      container
      height={"92vh"}
      width="100%"
      sx={{ minHeight: "92vh" }}
      mx={3}
    >
      <Typography
        fontSize={"22px"}
        textAlign={"left"}
        color={"primary"}
        p={"1%"}
        width="95%"
      >
        Welcome Rajesh !!!
      </Typography>

      <Grid height={"96%"} width="100%" textAlign={"left"}>
        <Grid
          container
          spacing={3}
          display={"flex"}
          minHeight={"50%"}
          pb="2vh"
          height={"100%"}
        >
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Card
              sx={{
                height: responsive.isMobile
                  ? "250px"
                  : responsive.isTablet
                  ? "100%"
                  : responsive.isLaptop
                  ? "70%"
                  : "70%",
              }}
            >
              <CardContent>
                <Typography fontWeight={"bold"} fontSize={"16px"}>
                  Leave Balance
                </Typography>
              </CardContent>
              <Divider />
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Card
              sx={{
                height: responsive.isMobile
                  ? "250px"
                  : responsive.isTablet
                  ? "100%"
                  : responsive.isLaptop
                  ? "70%"
                  : "70%",
              }}
            >
              <CardContent>
                <Typography fontWeight={"bold"} fontSize={"16px"}>
                  Upcoming Holidays
                </Typography>
              </CardContent>
              <Divider />
            </Card>
          </Grid>

          {role === "Admin" || role === "Manager" ? (
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <Card
                sx={{
                  height: responsive.isMobile
                    ? "250px"
                    : responsive.isTablet
                    ? "100%"
                    : responsive.isLaptop
                    ? "70%"
                    : "70%",
                }}
              >
                <CardContent>
                  <Typography fontWeight={"bold"} fontSize={"16px"}>
                    Pending Requests
                  </Typography>
                </CardContent>
                <Divider />
              </Card>
            </Grid>
          ) : null}
        </Grid>
      </Grid>
    </Grid>
  );
}
