import { IconButton, Box, MenuItem, Select, SelectChangeEvent, TextField, Modal, Button, InputBase, Paper } from "@mui/material";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import React, { useState } from "react";
import "./Consultas.css";
import ConsultaModal from "./ConsultaModal";
import ConsultaNotificationModal from "./ConsultaNotificationModal";
import { styled } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(29 78 216)",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

interface NavbarProps {
  filterValue: number
  handleFilterValue: (e: SelectChangeEvent<number>) => void
  handleSearchPress: (e: any) => void
  handleShowQueryState: (e: any) => void
}

export default function Navbar({ filterValue, handleFilterValue, handleSearchPress, handleShowQueryState }: NavbarProps) {
  const notificationIcon = true;

  function criarExtracao(): void {
    setOpenCriar(true);
  }

  function NotificacaoConsulta(): void {
    setOpenNotificacao(true);
  }

  function handleNotificacaoClose(): void {
    setOpenNotificacao(false);
  }

  function handleCriarClose(): void {
    setOpenCriar(false);
  }

  const [openCriar, setOpenCriar] = useState(false);
  const [openNotificacao, setOpenNotificacao] = useState(false);
  const [search, setSearch] = useState<string | null>(null);


  console.log(filterValue);
  return (
    <Box className="NavbarConsultas">
      <Box className="ConsultasTitleBox">
        Consultas
      </Box>
      <Box className="FiltroDataBox">
        <Select className="FiltroData"
          value={filterValue}
          // label="Filtrar..."      
          displayEmpty
          onChange={handleFilterValue}
          autoWidth={true}
          size="small"
        >
          <MenuItem value={0}>Todos</MenuItem>
          <MenuItem value={7}>Últimos 7 dias</MenuItem>
          <MenuItem value={30}>Últimos 30 dias</MenuItem>
          <MenuItem value={180}>Últimos 6 meses</MenuItem>
          <MenuItem value={365}>Último ano</MenuItem>
        </Select>
      </Box>
      <Box className="SearchBox">
        <Paper
          className="SearchTextField"
          variant="outlined"
          sx={{ p: "2px 4px", display: "flex"}}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Pesquisar"
            inputProps={{ "aria-label": "Pesquisar" }}
            onChange={handleShowQueryState}
          />
          <ThemeProvider theme={theme}>
            <IconButton className="SearchButtonConsulta" color="secondary" size="small"
              sx={{
                "&:hover": { backgroundColor: "rgb(59 130 246)" },
                backgroundColor: "rgb(29 78 216)",
                borderRadius: "50%",
              }} >
              <ManageSearchIcon
                onClick={handleSearchPress}
              /></IconButton>
          </ThemeProvider>
        </Paper>

      </Box>

      <Box className="CreateQueryBox">
        <IconButton className="CreateQueryButton" size="small" onClick={criarExtracao}
          sx={{
            color: "white",
            "&:hover": { backgroundColor: "rgb(59 130 246)" },
            backgroundColor: "rgb(29 78 216)",
            borderRadius: "99px",
          }}>
          <AddCircleOutlineOutlinedIcon />
          Nova Consulta
        </IconButton>
        <Modal
          open={openCriar}
          onClose={handleCriarClose}
        >
          <ConsultaModal />
        </Modal>
      </Box>

      <Box className="NotificationButtonBox">
        <ThemeProvider theme={theme}>
          <IconButton className="NotificationButton" onClick={NotificacaoConsulta} color="primary">{notificationIcon ? <NotificationsActiveIcon /> : <NotificationsNoneIcon />}
          </IconButton>
          <Modal
            open={openNotificacao}
            onClose={handleNotificacaoClose}
          >
            <ConsultaNotificationModal />
          </Modal>
        </ThemeProvider>
      </Box>
    </Box>
  );
}