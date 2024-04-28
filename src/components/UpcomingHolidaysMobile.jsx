import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  Typography,
  Avatar,
  Stack,
  IconButton,
} from "@mui/material";
// import eid from "../assets/eid.jpg";
// import mayday from "../assets/mayday.jpg";
// import independanceDay from "../assets/independance.jpg";
// import ganeshChaturthi from "../assets/ganeshchaturthi.jpg";
// import gandhiJayanti from "../assets/gandhijayanti.jpg";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useSelector } from "react-redux";
import { useUpcomingHolidaysQuery } from "../Store/slice/apiHolidaySlice";

export default function UpcomingHolidaysMobile() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const Holidays = useSelector((state) => state.holidays.annualLeaves);
  // const {data:upcomingHoliday,isSuccess}=useUpcomingHolidaysQuery();
  
  // // const upcomingHolidays=upcomingHoliday.holidays || []
  // // const Holidays = upcomingHoliday ? upcomingHoliday.holidays || [] : [];
  // // console.log(Holidays)
  // const [filteredEmployees, setFilteredEmployees] = useState([]); // New state for filtered employees
  // // const Navigate = useNavigate();
  // const Holidays=upcomingHoliday || [];
  // // console.log(Holidays)

  // useEffect(() => {
  //   // Update filteredEmployees when employees data changes
  //   if (isSuccess) {
  //     setFilteredEmployees(Holidays);
  //   }
  // }, [isSuccess, Holidays]);
  const {data:upcomingHoliday,isLoading}=useUpcomingHolidaysQuery();
  
  // const upcomingHolidays=upcomingHoliday.holidays || []
  const Holidays = upcomingHoliday ? upcomingHoliday.holidays || [] : [];

  console.log(Holidays)

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return `${day} ${monthNames[parseInt(month, 10) - 1]} ${year}`;
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Holidays.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Holidays.length - 1 : prevIndex - 1
    );
  };
  // Get the current date
  const currentDate = new Date();

  // Filter holidays that occur after the current date
  const upcomingHolidays = Holidays.filter((holiday) => {
    const holidayDate = new Date(holiday.holiday_date);
    return holidayDate > currentDate;
  });
  const currentHoliday = upcomingHolidays[currentIndex];
  const showPreviousButton = currentIndex !== 0 && upcomingHolidays.length > 1;
  const showNextButton = currentIndex !== upcomingHolidays.length - 1;
  if(isLoading){
    return(<></>)
  }

  return (
    <>
      <Grid item width="100%" mt={1} alignItems={"center"}>
        <Card sx={{ width: "100%", py: 1.5, borderRadius: "10px" }}>
          <Stack direction={"row"} justifyContent="space-around">
            {showPreviousButton && (
              <IconButton disableRipple size="small" onClick={handlePrevious}>
                <NavigateBeforeIcon />
              </IconButton>
            )}
            <Stack
              direction="row"
              alignItems={"center"}
              justifyContent={"center"}
              sx={{ width: "80%" }}
            >
              <Avatar
                alt={currentHoliday.holiday_occasion}
                src={URL.createObjectURL(
                  new Blob([new Uint8Array(currentHoliday.holiday_image.data)])
                )}
                sx={{ mx: "10px" }}
              />
              <Stack direction="column">
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {currentHoliday.holiday_occasion}
                </Typography>
                <Typography variant="body1">
                  {formatDate(currentHoliday.holiday_date)}
                </Typography>
              </Stack>
            </Stack>
            {showNextButton && (
              <IconButton disableRipple size="small" onClick={handleNext}>
                <NavigateNextIcon />
              </IconButton>
            )}
          </Stack>
        </Card>
      </Grid>
    </>
  );
}
