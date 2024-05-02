import { Grid, Card, CardContent, Typography } from "@mui/material";
import { Gauge, gaugeClasses } from "@mui/x-charts";
import { useGetAnnunalLeaveBalanceQuery, useGetRemainingBalanceQuery, useGetWorkFromHomeBalanceQuery } from "../Store/slice/apiLeaveBalanceSlice";
import { useSelector } from "react-redux";

export function LeaveBalanceDeskTop() {

  const {data: annualBal}=useGetAnnunalLeaveBalanceQuery();
  // const annualBalance=annualBal.remainingHolidays ||[]
  const annualBalance = annualBal ? annualBal.remainingHolidays || [] : [];
  // console.log(annualBalance)
  const id = useSelector((state) => state.employees.userId);
// console.log(id)
const {data:wfh}=useGetWorkFromHomeBalanceQuery(id)
const workFromHome = wfh ? wfh || [] : [];
// console.log(workFromHome)

const {data:leave}=useGetRemainingBalanceQuery(id)
// console.log(leave)
const remainingLeaves=leave ? leave || [] : [];

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
              value={remainingLeaves.remainingBalance}
              valueMax={remainingLeaves.default_balance}
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
            <Typography>Remaining Leave</Typography>
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
              value={workFromHome.remainingBalance}
              valueMax={workFromHome.defaultBalance}
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
              value={annualBalance.remainingHolidays}
              valueMax={annualBalance.totalHolidays}
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