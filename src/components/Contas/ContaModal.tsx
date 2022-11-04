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

const ContaButton = styled(Button)({
  textTransform: "none",
  color: "white",
});

export default function ContaModal() {
  const [data, setValue] = React.useState<moment.Moment | null>(
    moment()
  );

  const handleChange = (newData: moment.Moment | null) => {
    setValue(newData);
  };
  return (
    <Box className="ContaModal">
      <Box className="ContaModalTitle">
        <h1 id="ContaTitle">Inserir nova Conta</h1>
      </Box>
      <Box className="ContaModalWrapper">
        <Box className="ContaInput">
          <TextField fullWidth size="small" label="Nome da Conta"></TextField>
        </Box>
        <Box className="ContasQLInput">
          <TextField fullWidth size="small" label="Conta SQL" className="ContaInput"></TextField>
        </Box>
        <Box className="DateContaInput">
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
        <Box className="ContaModalButton">
          <ContaButton size="small" disableRipple id="ContaButtonCriar" color="primary" variant="contained"><b>Inserir Conta</b></ContaButton>
        </Box>
      </ThemeProvider>
    </Box>
  );
}

