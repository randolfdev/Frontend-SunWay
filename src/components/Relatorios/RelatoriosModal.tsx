import TextField from "@mui/material/TextField";
import moment from "moment";
import React from "react";
import { Button, Box, Modal } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
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

const RelatorioButton = styled(Button)({
  textTransform: "none",
  color: "white",
});

export default function RelatorioModal() {
  const [data, setValue] = React.useState<moment.Moment | null>(
    moment()
  );

  const handleChange = (newData: moment.Moment | null) => {
    setValue(newData);
  };
  return (
    <Box className="RelatorioModal">
      <Box className="RelatorioModalTitle">
        <h1 id="RelatorioTitle">Inserir novo Relatorio</h1>
      </Box>
      <Box className="RelatorioModalWrapper">
        <Box className="RelatorioInput">
          <TextField fullWidth size="small" label="Nome do Relatorio"></TextField>
        </Box>
        <Box className="ISOCodeInput">
          <TextField fullWidth size="small" label="Código do Relatorio"></TextField>
        </Box>
        <Box className="RelatorioCodigoXInput">
          <TextField fullWidth size="small" label="Informação"></TextField>
        </Box>
        <Box className="RelatorioCodigoYInput">
          <TextField fullWidth size="small" label="Código x"></TextField>
        </Box>
        <Box className="RelatorioCodigoZInput">
          <TextField fullWidth size="small" label="Código y"></TextField>
        </Box>
      </Box>
      <ThemeProvider theme={theme}>
        <Box className="RelatorioModalButton">
          <RelatorioButton size="small" disableRipple id="RelatorioButtonCriar" color="primary" variant="contained"><b>Inserir Relatorio</b></RelatorioButton>
        </Box>
      </ThemeProvider>
    </Box>
  );
}