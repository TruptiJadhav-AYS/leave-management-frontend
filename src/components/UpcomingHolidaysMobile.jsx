import React, { useState } from "react";
import {
  Grid,
  Card,
  Typography,
  Avatar,
  Stack,
  IconButton,
} from "@mui/material";
import eid from "../assets/eid.jpg";
import mayday from "../assets/mayday.jpg";
import independanceDay from "../assets/independance.jpg";
import ganeshChaturthi from "../assets/ganeshchaturthi.jpg";
import gandhiJayanti from "../assets/gandhijayanti.jpg";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Holidays = [
  { date: "11/04/2024",
    day: "Thursday",
    occasion: "Eid e milad", 
    img: eid },
  { date: "01/05/2024", 
    day: "Wednesday", 
    occasion: "Labour Day", 
    img: mayday },
  {
    date: "15/08/2024",
    day: "Thursday",
    occasion: "Independence Day",
    img: independanceDay,
  },
  {
    date: "07/09/2024",
    day: "Saturday",
    occasion: "Ganesh Chaturthi",
    img: ganeshChaturthi,
  },
  {
    date: "02/10/2024",
    day: "Wednesday",
    occasion: "Gandhi Jayanti",
    img: gandhiJayanti,
  },
];

export default function UpcomingHolidaysMobile() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentHoliday = Holidays[currentIndex];

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

  return (
    <>
    {/* <Typography textAlign={"left"} mx={0.5} fontWeight={"bold"}>Upcoming Holidays</Typography> */}
    <Grid item width="100%" display={"flex"} flexDirection={"row"} mt={1}>
      <Card sx={{ width: "100%", py: 1.5, borderRadius: "10px" }}>
        <Stack direction={"row"} justifyContent="space-around">
          <IconButton disableRipple size="small" onClick={handlePrevious}>
            <NavigateBeforeIcon />
          </IconButton>
          <Stack direction="row" alignItems={"center"} justifyContent={"center"} sx={{width:"80%"}}>
            <Avatar
              alt={currentHoliday.occasion}
              src={currentHoliday.img}
              sx={{ mx: "10px" }}
            />
            <Stack direction="column" spacing={0.5}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                {currentHoliday.occasion}
              </Typography>
              <Typography variant="body1">{currentHoliday.date}</Typography>
            </Stack>
          </Stack>
          <IconButton disableRipple size="small" onClick={handleNext}>
            <NavigateNextIcon />
          </IconButton>
        </Stack>
      </Card>
    </Grid>
    </>
  );
}
