import React from 'react';
import { Grid,Typography,Card} from '@mui/material';
import newYear from "../assets/newyear.jpg"
import republicDay from "../assets/republicday.jpg";
import holi from "../assets/holi.jpg";
import eid from "../assets/eid.jpg";
import gudhipadwa from "../assets/gudhipadwa.jpg"
import laborDay from "../assets/laborday.jpg";
import independanceDay from "../assets/independance.jpg";
import ganeshChaturthi from "../assets/ganeshchaturthi.jpg";
import gandhiJayanti from "../assets/gandhijayanti.jpg";
import dusshera from "../assets/dusshera.jpg";
import diwali from "../assets/diwali.png";
import christmas from "../assets/christmas.jpg";

const annualLeaves = [
  { date: '01/01/2024', day: 'Monday', occasion: 'New Year', img: newYear },
  { date: '26/01/2024', day: 'Friday', occasion: 'Republic Day', img: republicDay },
  { date: '25/03/2024', day: 'Monday', occasion: 'Holi', img: holi },
  { date:"09/04/2024" ,day: "Tuesday", occasion: "Gudhi padwa",img:gudhipadwa},
  { date:"11/04/2024", day:"Thursday", occasion:"Eid",img:eid},
  { date: '01/05/2024', day: 'Wednesday', occasion: 'Labour Day', img: laborDay },
  { date: '15/08/2024', day: 'Thursday', occasion: 'Independence Day', img: independanceDay },
  { date: '07/09/2024', day: 'Saturday', occasion: 'Ganesh Chaturthi', img: ganeshChaturthi },
  { date: '02/10/2024', day: 'Wednesday', occasion: 'Gandhi Jayanti', img: gandhiJayanti },
  { date: '12/10/2024', day: 'Saturday', occasion: 'Dussehra', img: dusshera },
  { date: '01/11/2024', day: 'Friday', occasion: 'Diwali', img: diwali },
  { date: '25/12/2024', day: 'Wednesday', occasion: 'Christmas Day', img: christmas },
];

export default function Holidays() {
  return (
    <Grid container spacing={2} py={2} px={2}>

          {annualLeaves.map((holiday, index) => (
          <Grid item key={index} xs={6} sm={6} md={4} lg={3}>
          <Card key={index} sx={{ marginBottom: 2 }} >
            <Typography  sx={{ fontWeight: 'bold',fontSize:"18px"}}>{holiday.occasion}</Typography>
            <img
              style={{ borderRadius: '50%' }}
              src={holiday.img}
              width={"50px"}
              heigh={"50px"}
              />
              <Typography>{holiday.date}</Typography>
              <Typography sx={{ mb: 1 }}>{holiday.day}</Typography>
          </Card>
          </Grid>
          ))}

    </Grid>
  );
}
