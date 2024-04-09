import * as React from "react";
import Paper from "@mui/material/Paper";
import {
  Box,
  Button,
  Divider,
  Card,
  Typography,
  Grid,
  Avatar,
  ListItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
export default function EmployeeDetails() {
  //   const Navigate = useNavigate();
  const params = useParams();

  const [selectedUserId, setSelectedUserId] = useState(1);
  useEffect(() => {
    const newUserId = parseInt(params.id);
    setSelectedUserId(newUserId);
  }, [params.id]);
  console.log("&&&&&&&&&&&&&&&&&&", selectedUserId);

  const contacts = [
    {
      id: 1,
      Profile: require("../assets/gudhipadwa.jpg"),
      Name: "Pruthviraj Suryawanshi",
      Email: "pruthvi@gmail.com",
      Gender: "Male",
      manager: 1,
      DepartmentId: 1,
    },
    {
      id: 2,
      Profile: require("../assets/christmas.jpg"),
      Name: "Pratiksha Nimbalkar",
      Email: "pratiksha@gmail.com",
      Gender: "Female",
      manager: 1,
      DepartmentId: 1,
    },
    {
      id: 3,
      Profile: require("../assets/diwali.png"),
      Name: "Trupti Jadhav",
      Email: "trupti@gmail.com",
      Gender: "Female",
      manager: 1,
      DepartmentId: 1,
    },
    {
      id: 4,
      Profile: require("../assets/profile.jpg"),
      Name: "Ketan Rathod",
      Email: "ketan@gmail.com",
      Gender: "Male",
      manager: 1,
      DepartmentId: 1,
    },
    {
      id: 5,
      Profile: require("../assets/republicday.jpg"),
      Name: "Yogesh Patel",
      Email: "yogesh@gmail.com",
      Gender: "Male",
      manager: 1,
      DepartmentId: 1,
    },
    {
      id: 6,
      Profile: require("../assets/holi.jpg"),
      Name: "Nupur Tyagi",
      Email: "nupur@gmail.com",
      Gender: "Female",
      manager: 2,
      DepartmentId: 2,
    },
    {
      id: 7,
      Profile: require("../assets/newyear.jpg"),
      Name: "Mehvish Shaikh",
      Email: "mehvish@gmail.com",
      Gender: "Female",
      manager: 2,
      DepartmentId: 2,
    },
    {
      id: 8,
      Profile: require("../assets/ganeshchaturthi.jpg"),
      Name: "Abhinandan Ambekar",
      Email: "abhi@gmail.com",
      Gender: "Male",
      manager: 2,
      DepartmentId: 1,
    },
    {
      id: 9,
      Profile: require("../assets/laborday.jpg"),
      Name: "Shruti Bagde",
      Email: "shruti@gmail.com",
      Gender: "Female",
      manager: 2,
      DepartmentId: 3,
    },
    {
      id: 10,
      Profile: require("../assets/gandhijayanti.jpg"),
      Name: "Prerana Divekar",
      Email: "prerana@gmail.com",
      Gender: "Female",
      manager: 2,
      DepartmentId: 1,
    },
  ];
  let selectedUser;
  for (let i = 0; i < contacts.length; i++) {
    if (selectedUserId === contacts[i].id) {
      selectedUser = contacts[i];
      console.log(contacts[i]);
    }
  }

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", pb: 1, minHeight: "100%", mt: 5 }}>
      <Card sx={{ mb: 1, borderRadius: 2 }} elevation={3} key={selectedUser.id}>
        <Button fullWidth>
          <Grid container spacing={2} sx={{ width: "100%" }}>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar src={selectedUser.Profile} alt={selectedUser.Name} />
            </Grid>
            <Grid item xs={12}>
              <Typography
                label="Name"
                variant="body1"
                sx={{
                  textTransform: "none",
                  color: "black",
                  fontWeight: "530",
                  display: "flex",
                }}
              >
                <Typography variant="body1" fontWeight={"bold"}>
                  Name :{" "}
                </Typography>
                {selectedUser.Name}
              </Typography>
              <Typography
                variant="body1"
                sx={{ textTransform: "none", color: "black", display: "flex" }}
              >
                <Typography variant="body1" fontWeight={"bold"}>
                  Email :{" "}
                </Typography>
                {selectedUser.Email}
              </Typography>
              <Typography
                label="Gender"
                variant="body1"
                sx={{
                  textTransform: "none",
                  color: "black",
                  fontWeight: "530",
                  display: "flex",
                }}
              >
                <Typography variant="body1" fontWeight={"bold"}>
                  Gender :{" "}
                </Typography>
                {selectedUser.Gender}
              </Typography>
              <Typography
                label="DepartmentId"
                variant="body1"
                sx={{
                  textTransform: "none",
                  color: "black",
                  fontWeight: "530",
                  display: "flex",
                }}
              >
                <Typography variant="body1" fontWeight={"bold"}>
                  DepartmentId :{" "}
                </Typography>
                {selectedUser.DepartmentId}
              </Typography>
              <Typography
                label="Manager"
                variant="body1"
                sx={{ textTransform: "none", color: "black", display: "flex" }}
              >
                <Typography variant="body1" fontWeight={"bold"}>
                  Manager :{" "}
                </Typography>
                {selectedUser.manager}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={6}>
                  <Button variant="contained">Edit</Button>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="contained">Delete</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Button>
      </Card>
      <Divider />
    </Paper>
  );
}
