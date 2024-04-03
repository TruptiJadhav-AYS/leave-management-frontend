import { Paper, Grid } from "@mui/material";
import backgroundImage from "./bg_loginpage.jpg";
import React, { useState } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import backgroundImage from "./bg_loginpage.jpg";
import { useNavigate } from "react-router-dom";
import logoImage from "./ays_logo.jpg";
import {
  TextField,
  Button,
  Typography,
  Container,
  Card,
  CardContent,
  Link,
} from "@mui/material";

// const validCredentials = {
//   email: "user@example.com",
//   password: "password123",
// };
const users = [
  { email: "pratiksha@gmail.com", password: "Prt@123", role:"Admin"},
  { email: "pratik@gmail.com", password: "Phhjj@123", role:"Manager" },
  { email: "pruthvi@gmail.com", password: "Pwwrt@123", role:"Employee" },
];

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const navigate= useNavigate();
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
      setEmailError("");
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
      setPasswordError("");
    };
  
    const handleSubmit = (event) => {
        event.preventDefault();
      
        // Reset error states
        setEmailError("");
        setPasswordError("");
      
        // Check for empty fields first
        if (!email) {
          setEmailError("Email is required");
        //   return; // Stop further execution
        }
      
        if (!password) {
          setPasswordError("Password is required");
          return; // Stop further execution
        }
      
        // Attempt to find the user by email
        const userByEmail = users.find(user => user.email === email);
      
        // If no user is found by email, set an email error
        if (!userByEmail) {
          setEmailError("Email does not exist");
          return; // Stop further execution
        }
      
        // If user is found but password does not match, set a password error
        if (userByEmail.password !== password) {
          setPasswordError("Incorrect password");
          return; // Stop further execution
        }
      
        // If both email and password are correct
        navigate("/Employee")

        console.log("Login successful", userByEmail);
        // Proceed with login success logic here
      };

  return (
    <Paper
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      {/* <Grid container > */}
      <Grid container pl={2}>
        <Grid
          item
          xs={3.1}
          sm={1.5}
          md={1.1}
          lg={0.9}
          // sx={{ backgroundColor: "red" }}
          mt={2}
        >
          <img
            src={logoImage}
            alt="Logo"
            style={{
              maxWidth: "80px",
              borderRadius: "50%",
              width: "100%",
              height: "auto",
            }}
          />
        </Grid>
        <Grid
          item
          xs={7}
          sm={3.5}
          md={2}
          lg={2}
          // sx={{ backgroundColor: "yellow" }}
          mt={2}
        >
          <Typography fontSize={30} fontWeight={"bold"} color={"darkblue"}>
            AYS
          </Typography>
          <Typography fontSize={20} fontWeight={"bold"}>
            Software Solution
          </Typography>
        </Grid>
      </Grid>
      <Container maxWidth="xs" sx={{ pt: "4vh" }}>
        <Card elevation={8}>
          <CardContent spacing={2} component={"form"} onSubmit={handleSubmit}>
            <Typography variant="h6" align="center" mb={2} fontWeight={"bold"}>
              Login
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  onChange={handleEmailChange}
                  error={Boolean(emailError)}
                  helperText={emailError}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  onChange={handlePasswordChange}
                  error={Boolean(passwordError)}
                  helperText={passwordError}
                />
              </Grid>
            </Grid>
            <Grid container gap={2} mt={2}>
              <Grid item xs={12}>
                <Link sx={{ cursor: "pointer" }}>Forget password?</Link>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ textTransform: "none", borderRadius: "100px" }}
                >
                  Sign In
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
      {/* </Grid> */}
    </Paper>
  );
}
export default LoginPage;
