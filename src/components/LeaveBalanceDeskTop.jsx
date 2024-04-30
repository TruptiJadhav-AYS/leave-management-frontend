import { Grid, Card, CardContent, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";
import { Gauge, gaugeClasses } from "@mui/x-charts";

export function LeaveBalanceDeskTop() {
  return (
    <Grid container spacing={1} pt={1}>
      <Grid item xs={4} sm={4} md={4} lg={4}>
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            py:3,
          }}
        >
          {/* <CardContent> */}
          <Gauge
            width={100}
            height={100}
            value={4}
            valueMax={21}
            startAngle={-110}
            endAngle={110}
            sx={{
              [`& .${gaugeClasses.valueText}`]: {
                fontSize: 13,
                transform: "translate(0px, 0px)",
              },
              // "& .MuiGauge-root.MuiGauge-valueArc": {
                "& .MuiGauge-valueArc": {
                // fill: (value) => (value <= 5 ? "red" : "#3f51b5"), 
                fill: "red", 
                // "& .MuiGauge-valueArc": {
                  // fill: ({ value }) => (value <= 5 ? "red" : "#3f51b5"),
              },
            }}
            text={({ value, valueMax }) => `${value} / ${valueMax}`}
          />
            {/* </CardContent>
            <CardContent> */}
            <Typography
            // color={"red"}
            >Remaining Leave</Typography>
          {/* </CardContent> */}
        </Card>
      </Grid>
      <Grid item xs={4} sm={4} md={4} lg={4}>
        <Card
          sx={{
            height: "100%", // Adjusted to 100%
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            py:3
          }}
        >
          {/* <CardContent> */}
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
            <Typography>Work From Home</Typography>
          {/* </CardContent> */}
        </Card>
      </Grid>
      <Grid item xs={4} sm={4} md={4} lg={4}>
        <Card
          sx={{
            height: "100%", // Adjusted to 100%
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            py:3
          }}
        >
          {/* <CardContent> */}
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
          {/* </CardContent> */}
        </Card>
      </Grid>
    </Grid>
  );
}