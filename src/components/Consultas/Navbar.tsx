import { IconButton, Box, MenuItem, Select, SelectChangeEvent, TextField, Modal, Button } from "@mui/material";
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

const CriarButton = styled(Button)({
  textTransform: "none",
  color: "white",
});

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
        <strong>Consultas</strong>
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
        <TextField size="small" variant="outlined" value={search}
          onChange={handleShowQueryState}
        > </TextField>
        <ThemeProvider theme={theme}>
          <IconButton className="SearchButton" color="secondary" size="small" >
            <ManageSearchIcon
              fontSize="inherit"
              onClick={handleSearchPress}
            /></IconButton>
        </ThemeProvider>
      </Box>
      <Box>
        <CriarButton variant="contained" startIcon={<AddCircleOutlineOutlinedIcon />} onClick={criarExtracao} >
          Nova Consulta
        </CriarButton>
        <Modal
          open={openCriar}
          onClose={handleCriarClose}
        >
          <ConsultaModal />
        </Modal>
      </Box>
      <div className="button-center">
        <Box>
          <ThemeProvider theme={theme}>
            <IconButton onClick={NotificacaoConsulta} color="primary">{notificationIcon ? <NotificationsActiveIcon /> : <NotificationsNoneIcon />}</IconButton>
            <Modal
              open={openNotificacao}
              onClose={handleNotificacaoClose}
            >
              <ConsultaNotificationModal />
            </Modal>
          </ThemeProvider>
        </Box>
      </div>
    </Box>
  );
}