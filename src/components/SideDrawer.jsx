import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Typography, Grid } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import HomeIcon from "@mui/icons-material/Home";
import SendIcon from "@mui/icons-material/Send";
import { People } from "@mui/icons-material";
import HistoryIcon from "@mui/icons-material/History";
import EventIcon from "@mui/icons-material/Event";
import ListItemIcon from "@mui/material/ListItemIcon";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logoImage from "../assets/ays_logo.jpg";
import UseReponsive from "../hooks/UseResponsive";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CategoryIcon from '@mui/icons-material/Category';
import { useSelector } from "react-redux";

export default function SideDrawer({ handleDrawerClose }) {
  let Navigate = useNavigate();
  let path = useLocation().pathname;
  let selected = path.substring(path.lastIndexOf("/") + 1);
  let selectedItem;
  let sideDrawerList;
  const role=useSelector((state)=>state.employees.userRole)

  let responsive = UseReponsive();
  function onMobile() {
    return responsive.isMobile && handleDrawerClose();
  }

  if (selected !== "Employee") {
    selectedItem = selected;
  } else {
    selectedItem = "Dashboard";
  }

  if (role === "Admin") {
    sideDrawerList = [
      "Dashboard",
      "Apply Leave",
      "History",
      "Holidays",
      "Employees",
      "Projects",
      "Inventory List",
    ];
  } else {
    sideDrawerList = ["Dashboard", "Apply Leave", "History", "Holidays"];
  }

  return (
    <div>
      <Toolbar sx={{ ml: "-20px" }}>
        <img
          src={logoImage}
          alt="Logo"
          style={{
            maxWidth: "60px",
            borderRadius: "50%",
            width: "100%",
            height: "100%",
          }}
        />
        <Grid ml="10px">
          <Typography textAlign={"left"} fontWeight={"bold"} color={"darkblue"}>
            AYS
          </Typography>
          <Typography fontWeight={"bold"}>Software Solution</Typography>
        </Grid>
      </Toolbar>
      <Divider />
      <List>
        {sideDrawerList.map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            sx={{
              backgroundColor:
                selectedItem === text.split(" ").join("") ? "#E0E0E0" : "white",
            }}
          >
            <ListItemButton
              disableTouchRipple
              onClick={
                index === 0
                  ? () => {
                      Navigate("/Employee");
                      onMobile();
                    }
                  : index === 1
                  ? () => {
                      Navigate("/Employee/ApplyLeave");
                      onMobile();
                    }
                  : index === 2
                  ? () => {
                      Navigate("/Employee/History");
                      onMobile();
                    }
                  : index === 3
                  ? () => {
                      Navigate("/Employee/Holidays");
                      onMobile();
                    }
                  : index === 4
                  ? () => {
                      Navigate("/Employee/Employees");
                      onMobile();
                    }
                  : index === 5
                  ? () => {
                      Navigate("/Employee/Projects");
                      onMobile();
                    }
                  : () => {
                      Navigate("/Employee/InventoryList");
                      onMobile();
                    }
              }
            >
              <ListItemIcon>
                {index === 0 ? (
                  <HomeIcon />
                ) : index === 1 ? (
                  <SendIcon />
                ) : index === 2 ? (
                  <HistoryIcon />
                ) : index === 3 ? (
                  <EventIcon />
                ) : index === 4 ? (
                  <People />
                ) : index===5 ? (
                  <AssignmentIcon />
                ) : 
                  <CategoryIcon/>
                }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
