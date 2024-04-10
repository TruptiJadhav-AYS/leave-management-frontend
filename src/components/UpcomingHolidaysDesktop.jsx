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
  ListItemText,
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
            ml:role==="Employee" ? "7%" : "0%"
          }}
        >
          {Holidays.map((Holiday,index)=>(
            <>
            <ListItem width="100%">
              <ListItemAvatar>
                <Avatar src={Holiday.img}/>
              </ListItemAvatar>
              <Typography ml="20%">{Holiday.occasion}<br/>{Holiday.date}</Typography>
            </ListItem>
            <Divider variant="inset"/>
            </>
          ))
          }
          {/* <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Diwali"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body1"
                    color="text.primary"
                  >
                    Monday, 20-04-2024
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Holi"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body1"
                    color="text.primary"
                  >
                    Monday, 20-04-2024
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar />
            </ListItemAvatar>
            <ListItemText
              primary="Holi"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body1"
                    color="text.primary"
                  >
                    Monday, 20-04-2024
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Holi"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body1"
                    color="text.primary"
                  >
                    Monday, 20-04-2024
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Holi"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body1"
                    color="text.primary"
                  >
                    Monday, 20-04-2024
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Holi"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body1"
                    color="text.primary"
                  >
                    Monday, 20-04-2024
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem> */}
        </List>
      </Box>
    </Card>
  );
}
