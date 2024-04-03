import "./App.css";
import { colors, createTheme, ThemeProvider } from "@mui/material";
import Display from "./components/Display";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/login/LoginPage";

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

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Employee" element={<Display/>} />
        </Routes>
        {/* <Display /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
