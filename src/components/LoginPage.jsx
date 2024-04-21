import { Paper, Grid, TextField, Button, Typography, Container, Card, CardContent } from "@mui/material";
import backgroundImage from "../assets/bg_loginpage.jpg";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoImage from "../assets/ays_logo.jpg";
import { login,isAuthenticated } from "../api/auth";
import { useDispatch, useSelector } from "react-redux";
// import isAuthenticated from ".."

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users.Users);

  

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError("");
  };

  const handleForgetClick = () => {
    navigate("/ForgetPassword");
    props.onSubmitClick(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setEmailError("");
    setPasswordError("");
    const userByEmail = users.find((user) => user.email === email);

    if (!email) {
      setEmailError("Please enter email");
      return;
    }
    if (!password) {
      setPasswordError("Please enter a password");
      return;
    }
    let authuser=isAuthenticated();
    console.log(authuser)

    try {
      const auth = await login({ email, password });
      if (auth) {
        console.log("helloooooooooo");
        navigate("/Employee");
        console.log("Login successful", email);
        props.onSignIn(email);
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
      // Handle login error if needed
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
        <Grid item xs={3.1} sm={1.5} md={1.1} lg={0.9} mt={2}>
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
        <Grid item xs={7} sm={3.5} md={2} lg={2} mt={2} textAlign={"left"}>
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
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Typography
                variant="h6"
                align="center"
                mb={2}
                fontWeight={"bold"}
                color={"primary"}
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
                <Grid item xs={12} textAlign={"left"}>
                  <Button
                    disableRipple
                    sx={{
                      "&:hover": { backgroundColor: "transparent" },
                      cursor: "pointer",
                      textTransform: "none",
                    }}
                    onClick={handleForgetClick}
                  >
                    Forget password?
                  </Button>
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
