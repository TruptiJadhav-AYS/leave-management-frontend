import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import { useSelector } from "react-redux";

export default function UpcomingHolidays() {
  const role = useSelector((state) => state.employees.userRole);
  const Holidays = useSelector((state) => state.holidays.annualLeaves);

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return `${day} ${monthNames[parseInt(month, 10) - 1]} ${year}`;
  };

  // Get the current date
  const currentDate = new Date();

  // Filter holidays that occur after the current date
  const upcomingHolidays = Holidays.filter((holiday) => {
    const holidayDate = new Date(holiday.date);
    return holidayDate > currentDate;
  });

  return (
    <Card sx={{ height: "100%" }}>
      <CardContent sx={{ position: "sticky" }}>
        <Typography fontWeight={"bold"} textAlign={"left"} fontSize={"16px"}>
          Upcoming Holidays
        </Typography>
      </CardContent>
      <Divider />
      <Box sx={{ overflow: "auto", scrollbarWidth: "thin", height: "85%", width: "100%" }}>
        <List
          sx={{
            width: "100%",
            height: 300,
            maxWidth: 360,
            bgcolor: "background.paper",
            ml: role === "Employee" ? "8%" : "0%",
          }}
        >
          {upcomingHolidays.map((holiday, index) => (
            <Box key={index}>
              <ListItem width="100%">
                <ListItemAvatar>
                  <Avatar src={holiday.img} />
                </ListItemAvatar>
                <Typography sx={{ ml: role === "Employee" ? "25%" : "15%" }}>
                  {holiday.occasion}
                  <br />
                  {formatDate(holiday.date)}
                </Typography>
              </ListItem>
              <Divider variant="inset" />
            </Box>
          ))}
        </List>
      </Box>
    </Card>
  );
}
