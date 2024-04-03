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
  { email: "pratiksha@gmail.com", password: "Prt@123", role: "Admin" },
  { email: "pratik@gmail.com", password: "Phhjj@123", role: "Manager" },
  { email: "pruthvi@gmail.com", password: "Pwwrt@123", role: "Employee" },
];

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

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
    setEmailError("");
    setPasswordError("");
    const userByEmail = users.find((user) => user.email === email);

    if (!email) {
      setEmailError("Please enter email");
    } else if (!userByEmail) {
      setPasswordError("Invalid Email or Password");
      return;
    }

    if (!password) {
      setPasswordError("Please enter a password");
    } else if (userByEmail.password !== password) {
      setPasswordError("Invalid email or password");
    } else {
      navigate("/Employee");
      console.log("Login successful", userByEmail);
      props.setRouteStatus(true);
    }
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
