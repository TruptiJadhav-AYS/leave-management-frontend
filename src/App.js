import "./App.css";
import { colors, createTheme, ThemeProvider } from "@mui/material";
import Display from "./components/Display";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import { useState } from "react";

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

const employee=[
  {name:"Pratiksha",email:"pratiksha@gmail.com",role:"Admin"},
  {name:"Trupti",email:"pratik@gmail.com",role:"Manager"},
  {name:"Pruthvi",email:"pruthvi@gmail.com",role:"Employee"}
] 

function App() {
  const [routeStatus, setRouteStatus] = useState(false);
  const [logedInUser, setLogedInUser] = useState("");

  const findRoleOfUser=()=>{
    let emp=employee.find((employee)=> employee.email===logedInUser)
    if(emp){
    return emp.role
    }
  }

  let role =findRoleOfUser();

  function onSignIn(email) {
    setLogedInUser(email);
  }

  function onSignInClick(flag) {
    setRouteStatus(flag);
  }

  return (
    <ThemeProvider theme={myTheme}>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <LoginPage onSignIn={onSignIn} onSignInClick={onSignInClick} />
            }
          />
          {routeStatus && (
            <Route
              path="/Employee/*"
              element={<Display logedInUser={logedInUser} role={role}/>}
            />
          )}
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
