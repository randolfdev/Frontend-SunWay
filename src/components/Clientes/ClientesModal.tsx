import TextField from "@mui/material/TextField";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import React from "react";
import FormControl from "@mui/material/FormControl";
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

const ClienteButton = styled(Button)({
  textTransform:"none",
  color:"white",
});

export default function ClienteModal() {
  const [data, setValue] = React.useState<moment.Moment | null>(
    moment()
  );

  return (
    <Box className="ClienteModal">
      <Box className="ClienteModalTitle">
        <h1 id="ClienteTitle">Inserir novo cliente</h1>
      </Box>
      <Box className="ClienteModalWrapper">
        <Box className="ClienteInput">
          <TextField fullWidth size="small" label="Nome do cliente"></TextField>
        </Box>
        <Box className="CodigoClienteInput">
          <TextField fullWidth size="small" label="Código do cliente"></TextField>
        </Box>
        <Box className="InformacaoInput">
          <TextField fullWidth size="small" label="Informação"></TextField>
        </Box>
        <Box className="ClienteCodigoXInput">
          <TextField fullWidth size="small" label="Código x"></TextField>
        </Box>
        <Box className="ClienteCodigoYInput">
          <TextField fullWidth size="small" label="Código y"></TextField>
        </Box>
      </Box>
      <ThemeProvider theme={theme}>
        <Box className="ClienteModalButton">
          <ClienteButton size="small" disableRipple id="ClienteButtonCriar" color="primary" variant="contained"><b>Inserir Cliente</b></ClienteButton>
        </Box>
      </ThemeProvider>
    </Box>
  );
}