import { IconButton, Box, MenuItem, Select, SelectChangeEvent, TextField, Modal, Button, InputBase, Paper } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import React, { useState } from "react";
import "./Consultas.css";
import ConsultaModal from "./ConsultaModal";

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

  function handleCriarClose(): void {
    setOpenCriar(false);
  }

  const [openCriar, setOpenCriar] = useState(false);
  const [search, setSearch] = useState<string | null>(null);


  console.log(filterValue);
  return (
    <Box className="NavbarConsultas">
      <Box className="ConsultasTitleBox">
        Consultas
      </Box>
      <Box className="FiltroDataBox">
        <ThemeProvider theme={theme}>
          <Select className="FiltroData"
            value={filterValue}
            // label="Filtrar..."      
            displayEmpty
            onChange={handleFilterValue}
            size="small"
            variant="outlined"
            sx={{
              bgcolor: "white",
              boxShadow: 3,
              borderRadius: 10,
              color: "primary.main",
              fontWeight: 600,
              ".MuiOutlinedInput-notchedOutline": { border: 0 }
            }}
          >
            <MenuItem value={0}>Todos</MenuItem>
            <MenuItem value={7}>Últimos 7 dias</MenuItem>
            <MenuItem value={30}>Últimos 30 dias</MenuItem>
            <MenuItem value={180}>Últimos 6 meses</MenuItem>
            <MenuItem value={365}>Último ano</MenuItem>
          </Select>
        </ThemeProvider>
      </Box>
      <ThemeProvider theme={theme}>
        <Box className="SearchBox">
          <Paper
            className="SearchTextField"
            sx={{
              bgcolor: "white",
              p: "2px 4px",
              display: "flex",
              boxShadow: 3,
              borderRadius: 10,
            }}
          >
            <InputBase
              sx={{
                ml: 1,
                flex: 1,
                fontWeight: 600
              }}
              placeholder="Pesquisar"
              onChange={handleShowQueryState}
            />
            <ThemeProvider theme={theme}>
              <IconButton
                className="SearchButtonConsulta"
                color="secondary"
                sx={{
                  "&:hover": { backgroundColor: "rgb(59 130 246)" },
                  backgroundColor: "rgb(29 78 216)",
                  borderRadius: "50%",
                }} >
                <SearchOutlinedIcon
                  onClick={handleSearchPress}
                /></IconButton>
            </ThemeProvider>
          </Paper>
        </Box>
      </ThemeProvider>
      <Box className="CreateQueryBox">
        <IconButton className="CreateQueryButton" size="small" onClick={criarExtracao}
          sx={{
            color: "white",
            "&:hover": { backgroundColor: "rgb(59 130 246)" },
            backgroundColor: "rgb(29 78 216)",
            borderRadius: "99px",
            boxShadow: 3,
            gap: 1
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
    </Box >
  );
}