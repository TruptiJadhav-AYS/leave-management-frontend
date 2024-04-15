import React from 'react';
import { Grid,Typography,Paper, Box, IconButton} from '@mui/material';
import UseReponsive from '../hooks/UseResponsive';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {useSelector} from 'react-redux'


export default function Holidays() {
  const annualLeaves=useSelector(state=>state.holidays.annualLeaves)
  // console.log("%%%%%%%%%", annualLeaves)
  let responsive=UseReponsive()
  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('-');
    const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  
    return `${day} ${monthNames[parseInt(month, 10) - 1]} ${year}`;
  };

  return (
    <Grid container spacing={2} pt={2} px={2}>

          {annualLeaves.map((holiday, index) => (
          <Grid item key={index} xs={6} sm={6} md={4} lg={3}>
          <Paper key={index} elevation={2} sx={{p:"10px"}}>
            <Typography  sx={{ fontWeight: 'bold',fontSize:"18px",height: responsive.isMobile ? "50px" : "25px"}}>{holiday.occasion}</Typography>
            <img
              style={{ borderRadius: '50%' }}
              alt={holiday.occasion}
              src={holiday.img}
              width={"50px"}
              heigh={"50px"}
              />
              <Typography>{formatDate(holiday.date)}</Typography>
              <Typography sx={{ mb: 1 }}>{holiday.day}</Typography>
          </Paper>
          </Grid>
          ))}
        <Box width={"100%"} display={"flex"} justifyContent={"right"}>
        <IconButton color="primary" sx={{width:"40px",height:"40px",mt:0.5}}>
          <AddCircleIcon sx={{width:"40px",height:"40px"}}/>
        </IconButton>
        </Box>
    </Grid>
  );
}