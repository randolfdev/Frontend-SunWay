import TextField from "@mui/material/TextField";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import React from "react";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";

export default function ClienteModal() {
  const [data, setValue] = React.useState<moment.Moment | null>(
    moment()
  );

  return (
    <Box className="ClienteModal">
      <Box className="ClienteModalTitle">
        Inserir novo cliente
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
      <Box className="ClienteModalButton">
        <button id="ClienteButtonCriar" className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full">Inserir Cliente</button>
      </Box>
    </Box>
  );
}