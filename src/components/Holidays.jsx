import React, { useState } from "react";
import { Grid, Typography, Paper, Box, IconButton } from "@mui/material";
// import UseResponsive from '../hooks/UseResponsive';
import UseReponsive from "../hooks/UseResponsive";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteHoliday } from "../Store/slice/HolidaysSlice";
import deleteHol from "../Store/action/DeleteHolidayAction";

export default function Holidays() {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const role=useSelector((state)=>state.employees.userRole)
  const [hoverIndex, setHoverIndex] = useState(null); // State to track hovered card

  function handleAddClick() {
    navigate("/Employee/Holidays/AddHoliday");
  }

  const annualLeaves = useSelector((state) => state.holidays.annualLeaves);
  let responsive = UseReponsive();

  function handledeleteHolidayClick(value){
    console.log(value)
    dispatch(deleteHol(value))
  }

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

  // Handle mouse enter and leave
  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <Grid container spacing={2} pt={2} px={2}>
      {annualLeaves.map((holiday, index) => (
        <Grid
          item
          key={index}
          xs={6}
          sm={6}
          md={4}
          lg={3}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <Paper elevation={2} sx={{ position: "relative", p: "10px" }}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "18px",
                height: responsive.isMobile ? "50px" : "25px",
              }}
            >
              {holiday.occasion}
            </Typography>
            <img
              style={{ borderRadius: "50%" }}
              alt={holiday.occasion}
              src={holiday.img}
              width={"50px"}
              height={"50px"}
            />
            <Typography>{formatDate(holiday.date)}</Typography>
            <Typography sx={{ mb: 1 }}>{holiday.day}</Typography>
            {hoverIndex === index && role === "Admin" && ((
              <IconButton sx={{ position: "absolute", top: 0, right: 0 }} onClick={()=>{handledeleteHolidayClick(holiday.id)}}>
                <DeleteIcon />
              </IconButton>
            ))}
          </Paper>
        </Grid>
      ))}
      {role === "Admin"  && (
      <Box width={"100%"} display={"flex"} justifyContent={"right"}>
        <IconButton
          color="primary"
          sx={{ width: "40px", height: "40px", mt: 0.5 }}
          onClick={handleAddClick}
        >
          <AddCircleIcon sx={{ width: "40px", height: "40px" }} />
        </IconButton>
      </Box>
      )}
    </Grid>
  );
}