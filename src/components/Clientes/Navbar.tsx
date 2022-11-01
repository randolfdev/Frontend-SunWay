import { Button, IconButton, FormControl, Box, MenuItem, Select, SelectChangeEvent, TextField, InputLabel } from "@mui/material";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import React, { ReactNode, useState } from "react";
import "./Clientes.css";

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
  handleSearchPress:(e: any ) => void
  handleShowQueryState:(e: any ) => void
}



export default function Navbar({handleSearchPress, handleShowQueryState}:NavbarProps) {
  const notificationIcon = true;

  function criarExtracao(): void {
    alert(handleShowQueryState);
    alert(handleSearchPress);

  }

  const [search, setSearch] = useState <string | null>(null);
  return (
    <div className="NavbarClientes">
      <strong>Clientes</strong>
      <div className="NavbarClientesToolbar">
        {/* <FormControl className="NavbarClientesSearch"> */}
        {/* <InputLabel id="demo-simple-select-helper-label">Filtrar</InputLabel> */}

        <TextField className="SearchBar" id="SearchClientes" variant="outlined" value = {search}
          onChange={handleShowQueryState}
        ></TextField>
        <ThemeProvider theme={theme}>
          <IconButton className="SearchButton" color="secondary" size="small" ><ManageSearchIcon 
            onClick =  {handleSearchPress}
          /></IconButton>
        </ThemeProvider>
        {/* </FormControl > */}
        <button onClick={criarExtracao} className=" bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full">
          <AddCircleOutlineIcon />
          &emsp;
          Nova Clientes
        </button>
        <div className="button-center">
          <ThemeProvider theme={theme}>
            <IconButton color="primary">{notificationIcon ? <NotificationsActiveIcon/> : <NotificationsNoneIcon/>}</IconButton>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}