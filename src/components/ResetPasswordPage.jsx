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
} from "@mui/material";

function ResetPasswordPage(props) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const navigate = useNavigate();

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
    setPasswordError("");
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setConfirmPasswordError("");
  };

  const handleResetPassword = (event) => {
    event.preventDefault();
    setPasswordError("");
    setConfirmPasswordError("");
    if(!newPassword){
        setPasswordError("Please enter Password");
      return;
    }
    else if(!confirmPassword){
        setConfirmPasswordError("Please enter Password");
      return;
    }
    else if (newPassword !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      return;
    }
    // console.log("New Password:", newPassword);

    navigate("/");
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
          <CardContent spacing={2}>
            <form onSubmit={handleResetPassword}>
              <Typography
                variant="h6"
                align="center"
                mb={2}
                fontWeight={"bold"}
                color={"primary"}
              >
                Reset Password
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="newPassword"
                    name="newPassword"
                    label="New Password"
                    type="password"
                    value={newPassword}
                    onChange={handleNewPasswordChange}
                    error={Boolean(passwordError)}
                    helperText={passwordError}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="confirmPassword"
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    error={Boolean(confirmPasswordError)}
                    helperText={confirmPasswordError}
                  />
                </Grid>
              </Grid>
              <Grid container gap={2} mt={2}>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ textTransform: "none", borderRadius: "100px" }}
                  >
                    Reset Password
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

export default ResetPasswordPage;
