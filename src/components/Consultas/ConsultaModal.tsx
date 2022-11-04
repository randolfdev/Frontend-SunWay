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

const ConsultaButton = styled(Button)({
  textTransform: "none",
  color: "white",
});

export default function ConsultaModal() {
  const [data, setValue] = React.useState<moment.Moment | null>(
    moment()
  );

  const handleChange = (newData: moment.Moment | null) => {
    setValue(newData);
  };
  return (
    <Box className="ConsultaModal">
      <Box className="ConsultaModalTitle">
        <h1 id="ConsultaTitle">Inserir novo Consulta</h1>
      </Box>
      <Box className="ConsultaModalWrapper">
        <Box className="ConsultaInput">
          <TextField fullWidth size="small" label="Nome da Consulta"></TextField>
        </Box>
        <Box className="ConsultaSQLInput">
          <TextField fullWidth size="small" label="Consulta SQL" className="ConsultaInput"></TextField>
        </Box>
        <Box className="DateConsultaInput">
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DesktopDatePicker
              label="Date desktop"
              inputFormat="MM/DD/YYYY"
              value={data}
              className="DataInput"
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>
      </Box>
      <ThemeProvider theme={theme}>
        <Box className="ConsultaModalButton">
          <ConsultaButton size="small" disableRipple id="ConsultaButtonCriar" color="primary" variant="contained"><b>Inserir Consulta</b></ConsultaButton>
        </Box>
      </ThemeProvider>
    </Box>
  );
}

