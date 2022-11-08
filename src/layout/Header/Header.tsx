import React, {useState} from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import HexagonIcon from "@mui/icons-material/Hexagon";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { IconButton, Menu, MenuItem, Box, Modal } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import "./Header.css";
import NotificationModal from "./NotificationModal";

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

export default function Header(props : SidebarProps) {
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

  function NotificacaoConsulta(): void {
    setOpenNotificacao(true);
  }

  function handleNotificacaoClose(): void {
    setOpenNotificacao(false);
  }

  const [openNotificacao, setOpenNotificacao] = useState(false);
  const notificationIcon = true;

  const sidebarIconClass = props.isOpen ? "SidebarIcon Hidden" : "SidebarIcon";

  return (
    <header>
      <div className={sidebarIconClass}>
        <ThemeProvider theme={theme}>
          <IconButton onClick={props.toggleSidebar} color="primary" ><MenuIcon /></IconButton>  
        </ThemeProvider>
      </div>
      <div className="LogoIcon">
        <ThemeProvider theme={theme}>
          <IconButton onClick={handleClick} color="primary" size="small"><HexagonIcon sx={{ fontSize: 47 }} /></IconButton>
        </ThemeProvider>
      </div>
      <div className="HelpIcon">
        <ThemeProvider theme={theme}>
          <IconButton size="small" color="primary"><HelpOutlineIcon sx={{ fontSize: 25 }} /></IconButton>
        </ThemeProvider>
      </div>
      <div className="NotificationButton">
        <ThemeProvider theme={theme}>
          <IconButton  onClick={NotificacaoConsulta} color="primary" size="small">{notificationIcon ? <NotificationsActiveIcon sx={{ fontSize: 25 }} /> : <NotificationsNoneIcon sx={{ fontSize: 25 }} />}
          </IconButton>
          <Modal
            open={openNotificacao}
            onClose={handleNotificacaoClose}
          >
            <NotificationModal />
          </Modal>
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