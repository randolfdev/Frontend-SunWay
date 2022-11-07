import React from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { SidebarData } from "./SidebarData";
import "./Sidebar.css";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { useNavigate } from "react-router-dom";

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

interface SidebarProps {
  isOpen : boolean;
  toggleSidebar() : void;
}

export default function Sidebar(props : SidebarProps): JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const sidebarClass = props.isOpen ? "Sidebar open" : "Sidebar";

  // const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const handleButtonInputConsultas = () => {
    navigate("/Consultas");
    setAnchorEl(null);
  };
  const handleButtonInputClientes = () => {
    navigate("/Clientes");
    setAnchorEl(null);
  };
  const handleButtonInputRelatorios = () => {
    navigate("/Relatorios");
    setAnchorEl(null);
  };
  const handleButtonInputContas = () => {
    navigate("/Contas");
    setAnchorEl(null);
  };
  return (
    <div className={sidebarClass}>
      <div className="SidebarHeader">
        <img src="logoincortec.jpg" alt="placeholder" className="profilePic" />
        <div className="SidebarHeaderLabel">
          <label className="CompanyName">Phillips</label>
          <label className="PersonName">Daniel</label>
        </div>
        <ThemeProvider theme={theme}>
          <IconButton onClick={props.toggleSidebar} color="primary"><MenuOpenIcon /></IconButton>
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
            <MenuItem onClick={handleButtonInputConsultas}>Consultas</MenuItem>
            <MenuItem onClick={handleButtonInputClientes}>Clientes</MenuItem>
            <MenuItem onClick={handleButtonInputRelatorios}>Relatórios</MenuItem>
            <MenuItem onClick={handleButtonInputContas}>Contas</MenuItem>
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