import { Paper, Grid } from "@mui/material";
import backgroundImage from "../assets/bg_loginpage.jpg";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoImage from "../assets/ays_logo.jpg";

import {
  TextField,
  Button,
  Typography,
  Container,
  Card,
  CardContent,
  Link,
} from "@mui/material";

const users = [
  { email: "pratiksha@gmail.com", password: "123" },
  { email: "pratik@gmail.com", password: "1234" },
  { email: "pruthvi@gmail.com", password: "12345" },
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
    }
    if (!password) {
      setPasswordError("Please enter a password");
    } else if (!userByEmail) {
      setPasswordError("Invalid Email or Password");
      return;
    } else if (userByEmail.password !== password) {
      setPasswordError("Invalid email or password");
    } else {
      navigate("/Employee");
      console.log("Login successful", userByEmail);
      props.onSignInClick(true);
      props.onSignIn(email)
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
      <Grid container pl={2}>
        <Grid
          item
          xs={3.1}
          sm={1.5}
          md={1.1}
          lg={0.9}
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
          <CardContent spacing={2}>
            <form onSubmit={handleSubmit}>
              <Typography
                variant="h6"
                align="center"
                mb={2}
                fontWeight={"bold"}
              >
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
            </form>
          </CardContent>
        </Card>
      </Container>
    </Paper>
  );
}
export default LoginPage;
