import "./App.css";
import { colors, createTheme, ThemeProvider } from "@mui/material";
import Display from "./components/Display";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/login/LoginPage";
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
  return (
    <ThemeProvider theme={myTheme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage setRouteStatus={setRouteStatus}/>} />
          {routeStatus && (<Route path="/Employee/*" element={<Display/>} />)}
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
