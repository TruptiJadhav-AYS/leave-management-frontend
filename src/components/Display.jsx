import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar,Stack ,Toolbar,Grid} from "@mui/material";
import SideDrawer from "./SideDrawer";
import { useState } from "react";
import CenterDisplay from "./CenterDisplay";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import MyProfile from "./MyProfile";
import { useNavigate } from "react-router-dom";
import UseReponsive from "../hooks/UseResponsive";

function AccountMenu({onMyProfileClick}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [logoutClick,setLogoutClick] = useState(false)
  const open = Boolean(anchorEl);

  let Navigate=useNavigate()

  const onLogoutClick=()=>{
    // window.confirm("Do you want to logout?")
    setLogoutClick(true);
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    onMyProfileClick(false)
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <Box>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
          >
            <Avatar sx={{ width: 32, height: 32 }}></Avatar>
          </IconButton>
        </Tooltip>
      {anchorEl ?
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={()=>onMyProfileClick(true)} >
          <Avatar /> My Profile
        </MenuItem>
        <MenuItem onClick={()=>onLogoutClick()}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu> 
      : 
      logoutClick &&
      Navigate("/")}
    </Box>
  );
}

const drawerWidth = 240;

export default function Display({logedInUser,role}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [myProfileClick,setMyProfileClick]=useState(false);
  const responsive=UseReponsive()

  console.log(role)

  function onMyProfileClick(value){
    setMyProfileClick(value)
  }

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <Box sx={{ display: "flex",bgcolor:"whitesmoke",height:"100vh"}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "primary",
        }}
      >
        <Stack direction={"row"} m={1.5} justifyContent={"space-between"} >
        <Stack>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ml:1.5,display: { sm: "none" }}}
        >
          <MenuIcon />
        </IconButton>
        </Stack>
          <Stack direction={"row"} spacing={2} height={"100%"} alignItems={"center"}>
            {responsive.isDesktop || responsive.isLaptop || responsive.isTablet ?
            <Typography variant="h6" noWrap component="div">
              {role==="Admin" ? 'Pratiksha Nimbalakar' : role==="Manager" ? "Trupti Jadhav" : " Pruthviraj Suryavanshi"}
            </Typography>
            :<></>
            }
            <AccountMenu onMyProfileClick={onMyProfileClick}/>
          </Stack>
        </Stack>
    </AppBar>
      <Box
        // component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <SideDrawer role={role} handleDrawerClose={handleDrawerClose}/>
        </Drawer>
        <Drawer
          variant="permanent"
          
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <SideDrawer  role={role}/>
        </Drawer>
      </Box>
      <Grid container direction={"row"}>
      <Toolbar/>
      {myProfileClick && <MyProfile/>}
      <Box bgcolor={"whitesmoke"} sx={{width:"100%",height:"89.7vh"}}>
      <CenterDisplay role={role}/>
      </Box>
      </Grid>
    </Box>
  );
}
