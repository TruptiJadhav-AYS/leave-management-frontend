import React from "react";
import { Card,Typography, Grid, Paper, Button, Divider } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
const contacts = [
  {
    id:1,
    Profile: require("../assets/gudhipadwa.jpg"),
    Name: "Pruthviraj Suryawanshi",
    Email: "pruthvi@gmail.com",
    Gender: "Male",
    manager: 1,
    DepartmentId: 1,
  },
  {
    id:2,
    Profile: require("../assets/christmas.jpg"),
    Name: "Pratiksha Nimbalkar",
    Email: "pratiksha@gmail.com",
    Gender: "Female",
    manager: 1,
    DepartmentId: 1,
  },
  {
    id:3,
    Profile: require("../assets/diwali.png"),
    Name: "Trupti Jadhav",
    Email: "trupti@gmail.com",
    Gender: "Female",
    manager: 1,
    DepartmentId: 1,
  },
  {
    id:4,
    Profile: require("../assets/profile.jpg"),
    Name: "Ketan Rathod",
    Email: "ketan@gmail.com",
    Gender: "Male",
    manager: 1,
    DepartmentId: 1,
  },
  {
    id:5,
    Profile: require("../assets/republicday.jpg"),
    Name: "Yogesh Patel",
    Email: "yogesh@gmail.com",
    Gender: "Male",
    manager: 1,
    DepartmentId: 1,
  },
  {
    id:6,
    Profile: require("../assets/holi.jpg"),
    Name: "Nupur Tyagi",
    Email: "nupur@gmail.com",
    Gender: "Female",
    manager: 2,
    DepartmentId: 2,
  },
  {
    id:7,
    Profile: require("../assets/newyear.jpg"),
    Name: "Mehvish Shaikh",
    Email: "mehvish@gmail.com",
    Gender: "Female",
    manager: 2,
    DepartmentId: 2,
  },
  {
    id:8,
    Profile: require("../assets/ganeshchaturthi.jpg"),
    Name: "Abhinandan Ambekar",
    Email: "abhi@gmail.com",
    Gender: "Male",
    manager: 2,
    DepartmentId: 1,
  },
  {
    id:9,
    Profile: require("../assets/laborday.jpg"),
    Name: "Shruti Bagde",
    Email: "shruti@gmail.com",
    Gender: "Female",
    manager: 2,
    DepartmentId: 3,
  },
  {
    id:10,
    Profile: require("../assets/gandhijayanti.jpg"),
    Name: "Prerana Divekar",
    Email: "prerana@gmail.com",
    Gender: "Female",
    manager: 2,
    DepartmentId: 1,
  },
];

export default function ContactsList() {
  const Navigate = useNavigate();
  function handleClick(Name) {
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].Name === Name) {
        console.log(contacts[i]);
        return  Navigate(`/Employee/Employees/ContactDetails/${contacts[i].id}`);
      }
    }
  }

  return (
    <Paper sx={{ width: "100%" }}>
      <Grid container>
        <Grid
          item
          sx={{
            height:"10vh",
            pt:1,
            width: "100%",
            top: "10%",
            zIndex: 1,
            bgcolor: "white",
            alignContent: "center",
          }}
          position={"sticky"}
        >
          <Grid container justifyContent={"space-between"} alignItems="center">
            <Grid item ml={1} >
              <Typography variant="h5">Contacts</Typography>
            </Grid>
            <Grid item mr={1} mb={"2px"}>
              <Button
                variant="contained"
                sx={{ borderRadius: "50px", backgroundColor:"white", color:"black" }}
                onClick={() => {
                  Navigate("/Employee/Employees/NewRegistration")
                }}
              >
                <AddIcon />
              </Button>
            </Grid>
          </Grid>
          <Divider/>
        </Grid>
       

        <Grid item sx={{ width: "100%",height: 'calc(100vh - 14%)', overflowY: 'auto', mx:1 }}>
          {contacts.map((contact) => (
            <Card sx={{ mb: 1,  borderRadius:2}} elevation={3} key={contact.id}>
              <Button onClick={() => handleClick(contact.Name)} fullWidth>
                <ListItem alignItems="flex-start">
                  <Grid container spacing={2}>
                    <Grid item>
                    <Avatar src={contact.Profile} alt={contact.Name} />
                    </Grid>
                    <Grid item>
                      <Typography variant="body1" sx={{textTransform:"none", color:"black", fontWeight:"530"}}>{contact.Name}</Typography>
                      <Typography variant="caption" sx={{textTransform:"none", color:"black"}}>{contact.Email}</Typography>
                    </Grid>
                  </Grid>
                </ListItem>
              </Button>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Paper>
  );
}
