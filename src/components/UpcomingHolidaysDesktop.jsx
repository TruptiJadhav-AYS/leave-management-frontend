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
import eid from "../assets/eid.jpg";
import mayday from "../assets/mayday.jpg";
import independanceDay from "../assets/independance.jpg";
import ganeshChaturthi from "../assets/ganeshchaturthi.jpg";
import gandhiJayanti from "../assets/gandhijayanti.jpg";

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

export default function UpcomingHolidays({role}) {

  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('/');
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
  
    return `${day} ${monthNames[parseInt(month, 10) - 1]} ${year}`;
  };
  
  return (
    <Card sx={{ height: "100%"}}>
      <CardContent sx={{ position: "sticky"}}>
        <Typography fontWeight={"bold"} textAlign={"left"} fontSize={"16px"}>
          Upcoming Holidays
        </Typography>
      </CardContent>
      <Divider />
      <Box sx={{ overflow: "auto", scrollbarWidth: "thin", height: "85%",width:"100%" }}>
        <List
          sx={{
            width: "100%",
            height:300,
            maxWidth: 360,
            bgcolor: "background.paper",
            ml:role==="Employee" ? "8%" : "0%"
          }}
        >
          {Holidays.map((Holiday,index)=>(
            <>
            <ListItem width="100%">
              <ListItemAvatar>
                <Avatar src={Holiday.img}/>
              </ListItemAvatar>
              <Typography sx={{ml:role==="Employee" ? "25%" : "15%"}}>{Holiday.occasion}<br/>{formatDate(Holiday.date)}</Typography>
            </ListItem>
            <Divider variant="inset"/>
            </>
          ))
          }
        </List>
      </Box>
    </Card>
  );
}
