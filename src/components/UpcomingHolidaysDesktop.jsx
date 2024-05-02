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
import { useUpcomingHolidaysQuery } from "../Store/slice/apiHolidaySlice";
import { PuffLoader } from "react-spinners";

export default function UpcomingHolidays() {
  const role = useSelector((state) => state.employees.userRole);
  // const Holidays = useSelector((state) => state.holidays.annualLeaves);
  const {data:upcomingHoliday,isLoading, isError}=useUpcomingHolidaysQuery();
  // const upcomingHoliday = useSelector((state) => state.holidays.holidayImages);
  const upcomingHolidays = upcomingHoliday ? upcomingHoliday.holidays || [] : [];
  // console.log(upcomingHolidays)


  // const formatDate = (dateString) => {
  //   const [year, month, day] = dateString.split("-");
  //   const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  //   return `${day} ${monthNames[parseInt(month, 10) - 1]} ${year}`;
  // };

  // Get the current date
  const currentDate = new Date();

  // Filter holidays that occur after the current date
  // const upcomingHolidays = Holidays.filter((holiday) => {
  //   const holidayDate = new Date(holiday.date);
  //   return holidayDate > currentDate;
  // });
  if (isLoading) {
    return <Box
     sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
    <PuffLoader color={"red"} fontSize={500} />
    </Box>
  }

  if (isError) {
    return <div>Error fetching holidays</div>;
  }

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
                  <Avatar src={URL.createObjectURL(
                new Blob([new Uint8Array(holiday.holiday_image.data)])
              )} />
                </ListItemAvatar>
                <Typography sx={{ ml: role === "Employee" ? "25%" : "15%" }}>
                  {holiday.holiday_occasion}
                  <br />
                  {(holiday.holiday_date)}
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