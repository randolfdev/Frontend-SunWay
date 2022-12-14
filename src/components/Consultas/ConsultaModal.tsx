import TextField from "@mui/material/TextField";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import React from "react";
import FormControl from "@mui/material/FormControl";

export default function ConsultaModal() {
  const [data, setValue] = React.useState<moment.Moment | null>(
    moment()
  );
    
  const handleChange = (newData: moment.Moment | null) => {
    setValue(newData);
  };
  return (
    <div className="ConsultaModal">
      <div className="ConsultaModalWrapper">
        <b id="NovaConsultaTitle">Criar nova consulta</b>
        <FormControl className="ConsultaForm">
          <div className="ConsultaFormBody">
            <TextField label="Executor" className="ExecutorInput">

            </TextField>
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

            <TextField label="Consulta SQL" className="ConsultaInput">

            </TextField>
          </div>
          <button id="ButtonCriar" className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full" >Criar consulta</button>
        </FormControl>
        
      </div>
    </div>
  );
}