import { IconButton, Box, MenuItem, Select, SelectChangeEvent, TextField, Modal } from "@mui/material";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import React, { useState } from "react";
import "./Contas.css";
import ContaModal from "./ContaModal";
import ContaNotificationModal from "./ContaNotificationModal";

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
    <div className="NavbarContas">
      <strong>Contas</strong>
      <div className="NavbarContasToolbar">
        {/* <FormControl className="NavbarContasSearch"> */}
        {/* <InputLabel id="demo-simple-select-helper-label">Filtrar</InputLabel> */}

        <Box
          display="flex"
          justifyContent="right"
          alignItems="center"
        >
          <Select id="FiltroContas"
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
        <TextField className="SearchBar" id="SearchContas" variant="outlined" value={search}
          onChange={handleShowQueryState}
        ></TextField>
        <ThemeProvider theme={theme}>
          <IconButton className="SearchButton" color="secondary" size="small" ><ManageSearchIcon
            onClick={handleSearchPress}
          /></IconButton>
        </ThemeProvider>
        {/* </FormControl > */}
        <button onClick={criarExtracao} className=" bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full">
          <AddCircleOutlineIcon />
          &emsp;
          Nova Conta
        </button>
        <Modal
          open={openCriar}
          onClose={handleCriarClose}
        >
          <ContaModal />
        </Modal>
        <div className="button-center">
          <ThemeProvider theme={theme}>
            <IconButton onClick={NotificacaoConsulta} color="primary">{notificationIcon ? <NotificationsActiveIcon /> : <NotificationsNoneIcon />}</IconButton>
            <Modal
              open={openNotificacao}
              onClose={handleNotificacaoClose}
            >
              <ContaNotificationModal />
            </Modal>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}