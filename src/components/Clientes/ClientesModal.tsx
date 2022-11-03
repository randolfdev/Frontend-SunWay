import TextField from "@mui/material/TextField";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import React from "react";
import FormControl from "@mui/material/FormControl";

export default function ClienteModal() {
  const [data, setValue] = React.useState<moment.Moment | null>(
    moment()
  );
    
  return (
    <div className="ClienteModal">
      <div className="ClienteModalWrapper">
        <b id="NovaClienteTitle">Inserir novo cliente</b>
        <FormControl className="ClienteForm">
          <div className="ClienteFormBody">
            <TextField fullWidth label="Nome do cliente" className="ClienteInput"></TextField>
            <TextField fullWidth label="Código do cliente" className="CodigoClienteInput"></TextField>
            <TextField fullWidth label="Informação" className="InformacaoInput"></TextField>
          </div>
          <div className="CodigosFormBody">
            <TextField fullWidth label="Código x" className="CodigoXInput"></TextField>
            <TextField fullWidth label="Código y" className="CodigoYInput"></TextField> 
          </div>
          <button id="ButtonCriar" className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full">Inserir Cliente</button>
        </FormControl>
        
      </div>
    </div>
  );
}