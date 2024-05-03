// import "./App.css";
// import { colors, createTheme, ThemeProvider } from "@mui/material";
// import Display from "./components/Display";
// import { Route, Routes } from "react-router-dom";
// import LoginPage from "./components/LoginPage";
// import { useState } from "react";
// import ForgetPasswordPage from "./components/forgetPasswordPage";
// import {jwtDecode} from 'jwt-decode';
// import ResetPasswordPage from "./components/ResetPasswordPage";
// import { setRole } from "./Store/slice/EmployeeSlice";
// import { useDispatch } from "react-redux";
// import "swagger-ui-react/swagger-ui.css";

// import { useDispatch, useSelector } from "react-redux";
// // import getLogedInUser from "./Store/action/getLogedInUser";
// import getLogedInUserId from "./Store/action/getLogedInUserEmail";
// import { useGetEmployeesQuery } from "./Store/slice/apiEmployeeSlice";
// import { useEffect, useState } from "react";

// const myTheme = createTheme({
//   satus: {
//     danger: colors.red[700],
//   },
//   palette: {
//     primary: {
//       main: colors.blue[800],
//     },
//     secondary: {
//       main: colors.green[600],
//     },
//   },
// });

// let role;
// let logedInId;

// const isTokenValid = () => {
//   const token = localStorage.getItem("authToken");
//   try {
//     const decodedToken = jwtDecode(token);
//     console.log(token)
//     role=decodedToken.role
//     console.log(localStorage)
//     logedInId=decodedToken.id
//     const currentTime = Date.now() / 1000; // Convert to seconds
//     if (decodedToken.exp && decodedToken.exp < currentTime) {
//       return false;
//     }
//     return true; 
//   } catch (error) {
//     return false; 
//   }
// };

// function App() {
//   // const [routeStatus, setRouteStatus] = useState(false);
//   const [forgetRouteStatus, setForgetRouteStatus] = useState(false);
//   const [resetRouteStatus, setResetRouteStatus] = useState(false);
//   const [logedInUser, setLogedInUser] = useState("");
//   const dispatch=useDispatch()
//   dispatch(setRole(role))
//   // console.log(role)
//   // function isAuthenticated() {
//     // localStorage.removeItem("authToken")
//     // const token = localStorage.getItem("authToken");
//     // console.log(token)
//   //   return token;
//   // }

//   // const findRoleOfUser = () => {
//     // let emp = employee.find((employee) => employee.email === logedInUser);
//     // if (emp) {
//     //   return emp.role;
//     // }
//   // };

//   // let role = findRoleOfUser();

//   function onSignIn(email) {
//     setLogedInUser(email);
//     console.log(logedInUser)
//   }

//   // function onSignInClick(flag) {
//   //   // setRouteStatus(flag);
//   // }

//   function onSubmitClick(flag) {
//     setForgetRouteStatus(flag);
//   }

//   function onResetClick(flag) {
//     setResetRouteStatus(flag);
//   }

//   return (
//     <ThemeProvider theme={myTheme}>
//       <div className="App">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <LoginPage
//                 onSignIn={onSignIn}
//                 // onSignInClick={onSignInClick}
//                 onSubmitClick={onSubmitClick}
//               />
//             }
//           />
//           {forgetRouteStatus && (
//             <Route
//               path="/ForgetPassword"
//               element={
//                 <ForgetPasswordPage
//                   onSignIn={onSignIn}
//                   // onSignInClick={onSignInClick}
//                   onResetClick={onResetClick}
//                 />
//               }
//             />
//           )}
//           {resetRouteStatus && (
//             <Route path="/ResetPassword" element={<ResetPasswordPage logedInUser={logedInUser}/>} />
//           )}
//           {/* {routeStatus && ( */}
//           {/* {token!=== ? ( */}
//             <Route
//               path="/Employee/*"
//               element={isTokenValid() ? <Display /> : <></>}
//             />
//           {/* ) : (
//             <></>
//           )} */}
//           {/* )} */}
//         </Routes>
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;


import "./App.css";
import { colors, createTheme, ThemeProvider } from "@mui/material";
import Display from "./components/Display";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import { useEffect, useState } from "react";
import ForgetPasswordPage from "./components/forgetPasswordPage";
import {jwtDecode} from 'jwt-decode';
import ResetPasswordPage from "./components/ResetPasswordPage";
import { useGetEmployeesQuery } from "./Store/slice/apiEmployeeSlice";
import { setUserId } from "./Store/slice/EmployeeSlice";
import "swagger-ui-react/swagger-ui.css";
import { useDispatch, useSelector } from "react-redux";
// import getLogedInUser from "./Store/action/getLogedInUser";
import getLogedInUserId from "./Store/action/getLogedInUserEmail";
import { getRole} from "./Store/slice/EmployeeSlice";

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

let logedInId;
let role;
// Check if the token is valid

const isTokenValid = () => {
  const token = localStorage.getItem("authToken");
  try {
    // Decode the token
    const decodedToken = jwtDecode(token);
    console.log(localStorage)
    logedInId=decodedToken.id
    role=decodedToken.role
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
  const [forgetRouteStatus, setForgetRouteStatus] = useState(false);
  const [resetRouteStatus, setResetRouteStatus] = useState(false);
  const [logedInUser, setLogedInUser] = useState("");
  const dispatch=useDispatch()
  dispatch(setRole(role))
  dispatch(setUserId(id))
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
    // setLogedInUser(email);
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
            <Route path="/ResetPassword" element={<ResetPasswordPage />} />
          )}
            <Route
              path="/Employee/*"
              element={isTokenValid() ? <Display /> : <></>}
            />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
