import "./App.css";
import { colors, createTheme, ThemeProvider } from "@mui/material";
import Display from "./components/Display";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import { useState } from "react";

const myTheme=createTheme({
  typography: {
    fontFamily:"Open Sans"
  },
  satus:{
    danger:colors.red[700]
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

function App() {
  const [routeStatus, setRouteStatus]=useState(false);
  const [logedInUser,setLogedInUser]=useState("");
  
  function onSignIn(email){
    setLogedInUser(email)
  }

  function onSignInClick(flag){
    setRouteStatus(flag)
  }

  return (
    <ThemeProvider theme={myTheme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage onSignIn={onSignIn} onSignInClick={onSignInClick}/>} />
          {routeStatus && (<Route path="/Employee/*" element={<Display logedInUser={logedInUser} />} />)}
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
