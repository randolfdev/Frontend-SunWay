import React, { useState } from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AssignmentLateOutlinedIcon from "@mui/icons-material/AssignmentLateOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import InsertChartOutlinedTwoToneIcon from "@mui/icons-material/InsertChartOutlinedTwoTone";
import { IconButton } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
interface ClienteItemProps {
  filterValue: number,
  showQuery: string | undefined
}

export default function ClienteItem({filterValue, showQuery}:ClienteItemProps ) {
  const Clientes = [{ id: 1, Executor: "Spy", inicio: "10/04/2022", Registros: 7 }, { id: 2, Executor: "Teste", inicio: "10/26/2022", Registros: 3 }, { id: 3, Executor: "Hasagi", inicio: "11/04/2019", Registros:"0/10" }, { id: 4, Executor: "???", inicio: "11/27/2021", Registros: 3 }, { id: 5, Executor: "apyrr", inicio: "10/11/2022", Registros: 0 }, {id: 6, Executor: "🗿", inicio: "12/11/2021", Registros: 0}]; 
  let dateFilter: Date;
  if (filterValue > 0) {
    dateFilter = new Date(new Date().setDate(new Date().getDate() - filterValue)); 
  }
  else {
    dateFilter = new Date("10/10/1970");
  }
  
  const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(29 78 216)",
      },
      secondary: {
        main: "#000000",
      },
    }
  });

  const textoPesquisa = showQuery ? showQuery : "";

  return (
    <>
      {Clientes.map((val, key) => {
        const dataInicio = Date.parse(val.inicio);

        if(dataInicio > dateFilter.getTime()){
          if (val.Executor.toLowerCase().includes(textoPesquisa.toLowerCase())) {
            return (
              <div key={key} className="ClienteItem shadow-lg">
                <div className="ClienteItemHeader">
                  <div className="ClienteItemId">{val.id}</div>
                  <span>Clientes {key + 1}</span>
                </div>
                <div className="ClienteCorpo">
                  <li className="QueryFormatli">

                    <ul className="QueryFormatul"><AccountCircleOutlinedIcon sx={{ fontSize: 12.5 }} className="QueryIcon" />Executor: <b>{val.Executor}</b></ul>
                    <ul className="QueryFormatul"><CalendarMonthOutlinedIcon sx={{ fontSize: 12.5 }} className="QueryIcon" />Iniciada em: <b>{val.inicio}</b></ul>
                    <ul className="QueryFormatul"><AssignmentLateOutlinedIcon sx={{ fontSize: 12.5 }} className="QueryIcon" />Registros: <b>{val.Registros}</b></ul>
                    <ThemeProvider theme={theme}>
                      <IconButton className="ChartIcon" color="primary"><InsertChartOutlinedTwoToneIcon /></IconButton>

                      <IconButton className="ChartIcon" color="primary"><SettingsOutlinedIcon /></IconButton>
                    </ThemeProvider>
                  </li>
                </div>
              </div>
            );
          }
        }
      })}
    </>
  );
}