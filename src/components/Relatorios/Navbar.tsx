import { Button, IconButton, FormControl, Box, MenuItem, Select, SelectChangeEvent, TextField, InputLabel, Modal } from "@mui/material";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import React, { ReactNode, useState } from "react";
import "./Relatorios.css";
import RelatoriosModal from "./RelatoriosModal";
import RelatoriosNotificationModal from "./RelatoriosNotificationModal";

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

  function CriarRelatorio(): void {
    setOpenCriar(true);
  }

  function NotificacaoRelatorio(): void {
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

  return (
    <div className="NavbarRelatorios">
      <strong>Relatorios</strong>
      <div className="NavbarRelatoriosToolbar">
        {/* <FormControl className="NavbarRelatoriosSearch"> */}
        {/* <InputLabel id="demo-simple-select-helper-label">Filtrar</InputLabel> */}

        <Box
          display="flex"
          justifyContent="right"
          alignItems="center"
        >
          <Select id="FiltroRelatorios"
            value={filterValue}
            // label="Filtrar..."      
            displayEmpty
            onChange={handleFilterValue}
            autoWidth={true}
            className="FilterBar"
          >
            <MenuItem value={0}>Todos</MenuItem>
            <MenuItem value={7}>Últimos 7 dias</MenuItem>
            <MenuItem value={30}>Últimos 30 dias</MenuItem>
            <MenuItem value={180}>Últimos 6 meses</MenuItem>
            <MenuItem value={365}>Último ano</MenuItem>
          </Select>
        </Box>
        <TextField className="SearchBar" id="SearchRelatorios" variant="outlined" value={search}
          onChange={handleShowQueryState}
        ></TextField>
        <ThemeProvider theme={theme}>
          <IconButton className="SearchButton" color="secondary" size="small" ><ManageSearchIcon
            onClick={handleSearchPress}
          /></IconButton>
        </ThemeProvider>
        <button onClick={CriarRelatorio} className=" bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full">
          <AddCircleOutlineIcon />
          &emsp;
          Novo Relatorio
        </button>
        <Modal
          open={openCriar}
          onClose={handleCriarClose}
        >
          <RelatoriosModal />
        </Modal>
        <div className="button-center">
          <ThemeProvider theme={theme}>
            <IconButton onClick={NotificacaoRelatorio} color="primary">{notificationIcon ? <NotificationsActiveIcon /> : <NotificationsNoneIcon />}</IconButton>
            <Modal
              open={openNotificacao}
              onClose={handleNotificacaoClose}
            >
              <RelatoriosNotificationModal />
            </Modal>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}