import React from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { SidebarData } from "./SidebarData";
import "./Sidebar.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

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

export default function Sidebar(): JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="Sidebar">
      <div className="SidebarHeader">
        <img src="logoincortec.jpg" alt="placeholder" className="profilePic" />
        <div className="SidebarHeaderLabel">
          <label className="CompanyName">Phillips</label>
          <label className="PersonName">Daniel</label>
        </div>
        <ThemeProvider theme={theme}>
          <IconButton onClick={handleClick} color="primary"><ArrowDropDownIcon /></IconButton>
        </ThemeProvider>
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
            <MenuItem onClick={handleClose}>Consultas</MenuItem>
            <MenuItem onClick={handleClose}>Clientes</MenuItem>
            <MenuItem onClick={handleClose}>Relatórios</MenuItem>
          </Menu>
        </div>
      </div>
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li key={key} className="row" id={window.location.pathname == val.link ? "active" : ""} onClick={() => window.location.pathname = val.link}>
              {" "}
              <div id="Icon">{val.icon}</div>{" "}
              <div id="title">
                {val.title}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}