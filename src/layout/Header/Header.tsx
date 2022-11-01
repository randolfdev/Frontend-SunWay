import React from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import HexagonIcon from "@mui/icons-material/Hexagon";
import { Button, IconButton } from "@mui/material";
import { Routes, Route, useNavigate } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import "./Header.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(29 78 216)",
    },
    secondary: {
      main: "#000000",
    },
  },
});

/*const navigate = useNavigate();*/

const handleButtonInput = () => {
  alert("teste");
};

export default function Header() {
  return (
    <header>
      <div className="LogoIcon">
        <ThemeProvider theme={theme}>
          <IconButton color="primary"><HexagonIcon sx={{ fontSize: 47 }} /></IconButton>
        </ThemeProvider>
      </div>
      <div className="HelpIcon">
        <ThemeProvider theme={theme}>
          <IconButton size="small" color="primary" ><HelpOutlineIcon onClick={handleButtonInput}/></IconButton>
        </ThemeProvider>
      </div>
    </header>
  );
}