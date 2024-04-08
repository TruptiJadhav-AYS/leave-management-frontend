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

function ForgetPasswordPage(props) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [otpError, setOtpError] = useState("");
  const [showOTPField, setShowOTPField] = useState(false);
  const [otp, setOTP] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const handleGetOTP = () => {
    setShowOTPField(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmailError("");
    if (!email) {
      setEmailError("Please enter email");
    } else if (!showOTPField) {
      handleGetOTP();
    } else if (otp === "") {
        setOtpError("Required"); 
      }
    else if (otp !== "1234") { 
      setOtpError("Invalid OTP"); 
    } else {
      navigate("/ResetPassword");
      props.onSignInClick(true);
      props.onSignIn(email);
    }
    props.onResetClick(true);
    navigate("/ResetPassword");
    props.onSignInClick(true);
    props.onSignIn(email);
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
            <form onSubmit={handleSubmit}>
              <Typography
                variant="h6"
                align="center"
                mb={2}
                fontWeight={"bold"}
                color={"primary"}
              >
                Forget Password
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
                <Grid container gap={2} mt={2}>
                  <Grid item xs={12}>
                    <Button
                      // type="submit"
                      // fullWidth
                      // onClick={}
                      variant="contained"
                      color="primary"
                      sx={{ textTransform: "none", borderRadius: "100px" }}
                    >
                      Get OTP
                    </Button>
                  </Grid>
                </Grid>
                {/* {showOTPField && ( */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="otp"
                    name="otp"
                    label="OTP"
                    type="text"
                    value={otp}
                    onChange={(e) => setOTP(e.target.value)}
                    error={Boolean(otpError)}
                    helperText={otpError}
                  />
                </Grid>
                {/* )} */}
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
                    Submit
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

export default ForgetPasswordPage;
