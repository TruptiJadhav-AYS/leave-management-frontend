import "./App.css";
import { colors, createTheme, ThemeProvider } from "@mui/material";
import Display from "./components/Display";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import { useState } from "react";
import ForgetPasswordPage from "./components/forgetPasswordPage";
import {jwtDecode} from 'jwt-decode';
import ResetPasswordPage from "./components/ResetPasswordPage";
// import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const myTheme = createTheme({
  satus: {
    danger: colors.red[700],
  },
  palette: {
    primary: {
      main: colors.blue[800],
    },
    secondary: {
      main: colors.green[600],
    },
  },
});

const employee = [
  { name: "Pratiksha", email: "pratiksha@gmail.com", role: "Admin" },
  { name: "Trupti", email: "trupti@gmail.com", role: "Manager" },
  { name: "Pruthvi", email: "pruthvi@gmail.com", role: "Employee" },
];


const isTokenValid = () => {
  const token = localStorage.getItem("authToken");
    // console.log(token)
  if (!token) {
    return false;
  }

  try {
    // Decode the token
    const decodedToken = jwtDecode(token);

    // Check if the token is expired
    const currentTime = Date.now() / 1000; // Convert to seconds
    if (decodedToken.exp && decodedToken.exp < currentTime) {
      return false;
    }

    // Additional validation logic if needed (e.g., checking claims)

    return true; // Token is valid
  } catch (error) {
    console.error('Error decoding or validating token:', error);
    return false; // Token is invalid due to decoding or validation error
  }
};

function App() {
  const [routeStatus, setRouteStatus] = useState(false);
  const [forgetRouteStatus, setForgetRouteStatus] = useState(false);
  const [resetRouteStatus, setResetRouteStatus] = useState(false);
  const [logedInUser, setLogedInUser] = useState("");

  // function isAuthenticated() {
    // localStorage.removeItem("authToken")
    const token = localStorage.getItem("authToken");
    console.log(token)
  //   return token;
  // }

  const findRoleOfUser = () => {
    let emp = employee.find((employee) => employee.email === logedInUser);
    if (emp) {
      return emp.role;
    }
  };

  let role = findRoleOfUser();

  function onSignIn(email) {
    setLogedInUser(email);
  }

  function onSignInClick(flag) {
    setRouteStatus(flag);
  }

  function onSubmitClick(flag) {
    setForgetRouteStatus(flag);
  }

  function onResetClick(flag) {
    setResetRouteStatus(flag);
  }

  return (
    <ThemeProvider theme={myTheme}>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <LoginPage
                onSignIn={onSignIn}
                onSignInClick={onSignInClick}
                onSubmitClick={onSubmitClick}
              />
            }
          />
          {forgetRouteStatus && (
            <Route
              path="/ForgetPassword"
              element={
                <ForgetPasswordPage
                  onSignIn={onSignIn}
                  onSignInClick={onSignInClick}
                  onResetClick={onResetClick}
                />
              }
            />
          )}
          {resetRouteStatus && (
            <Route path="/ResetPassword" element={<ResetPasswordPage />} />
          )}
          {/* {routeStatus && ( */}
          {/* {token!=== ? ( */}
            <Route
              path="/Employee/*"
              element={isTokenValid() ? <Display logedInUser={logedInUser}/> : <></>}
            />
          {/* ) : (
            <></>
          )} */}
          {/* )} */}
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
