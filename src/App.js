import "./App.css";
import { colors, createTheme, ThemeProvider } from "@mui/material";
import Display from "./components/Display";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import { useState } from "react";
import ForgetPasswordPage from "./components/forgetPasswordPage";
import {jwtDecode} from 'jwt-decode';
import ResetPasswordPage from "./components/ResetPasswordPage";
import { setId, setRole } from "./Store/slice/EmployeeSlice";
import { useDispatch } from "react-redux";
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

let role;
let id;

const isTokenValid = () => {
  const token = localStorage.getItem("authToken");
  try {
    const decodedToken = jwtDecode(token);
    console.log(token)
    role=decodedToken.role
    id=decodedToken.id
    console.log(decodedToken)
    const currentTime = Date.now() / 1000; // Convert to seconds
    if (decodedToken.exp && decodedToken.exp < currentTime) {
      return false;
    }
    return true; 
  } catch (error) {
    return false; 
  }
};

function App() {
  // const [routeStatus, setRouteStatus] = useState(false);
  const [forgetRouteStatus, setForgetRouteStatus] = useState(false);
  const [resetRouteStatus, setResetRouteStatus] = useState(false);
  const [logedInUser, setLogedInUser] = useState("");
  const dispatch=useDispatch()
  dispatch(setRole(role))
  dispatch(setId(id))
  // console.log(role)
  // function isAuthenticated() {
    // localStorage.removeItem("authToken")
    // const token = localStorage.getItem("authToken");
    // console.log(token)
  //   return token;
  // }

  // const findRoleOfUser = () => {
    // let emp = employee.find((employee) => employee.email === logedInUser);
    // if (emp) {
    //   return emp.role;
    // }
  // };

  // let role = findRoleOfUser();

  function onSignIn(email) {
    setLogedInUser(email);
    console.log(logedInUser)
  }

  // function onSignInClick(flag) {
  //   // setRouteStatus(flag);
  // }

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
                // onSignInClick={onSignInClick}
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
                  // onSignInClick={onSignInClick}
                  onResetClick={onResetClick}
                />
              }
            />
          )}
          {resetRouteStatus && (
            <Route path="/ResetPassword" element={<ResetPasswordPage logedInUser={logedInUser}/>} />
          )}
          {/* {routeStatus && ( */}
          {/* {token!=== ? ( */}
            <Route
              path="/Employee/*"
              element={isTokenValid() ? <Display /> : <></>}
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
