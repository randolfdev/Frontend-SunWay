import React from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import HexagonIcon from "@mui/icons-material/Hexagon";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
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

export default function Header() {
  const navigate = useNavigate();
  const handleButtonInput = () => {
    navigate("/login");
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <header>
      <div className="LogoIcon">
        <ThemeProvider theme={theme}>
          <IconButton onClick={handleClick} color="primary"><HexagonIcon sx={{ fontSize: 47 }} /></IconButton>
        </ThemeProvider>
      </div>
      <div className="HelpIcon">
        <ThemeProvider theme={theme}>
          <IconButton size="small" color="primary" ><HelpOutlineIcon /></IconButton>
        </ThemeProvider>
      </div>
      <div>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem onClick={handleButtonInput}>Trocar usuário</MenuItem>
        </Menu>
      </div>
    </header>
  );
}