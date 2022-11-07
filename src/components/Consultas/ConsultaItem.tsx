import React, { useState } from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AssignmentLateOutlinedIcon from "@mui/icons-material/AssignmentLateOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import InsertChartOutlinedTwoToneIcon from "@mui/icons-material/InsertChartOutlinedTwoTone";
import { IconButton, Modal } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import GraficoModal from "./ConsultaItemGraficoModal";
import ConfigModal from "./ConsultaItemConfigModal";
interface ConsultaItemProps {
  filterValue: number,
  showQuery: string | undefined
}

export default function ConsultaItem({ filterValue, showQuery }: ConsultaItemProps) {
  const Consultas = [{ id: 1, Executor: "Usuário x", inicio: "10/04/2022", Registros: 7 }, { id: 2, Executor: "Usuário y", inicio: "10/26/2022", Registros: 3 }, { id: 3, Executor: "Usuário a", inicio: "11/04/2019", Registros: "10" }, { id: 4, Executor: "Usuário b", inicio: "11/27/2021", Registros: 43 }, { id: 5, Executor: "Usuário c", inicio: "10/11/2022", Registros: 20 }, { id: 6, Executor: "Usuário d", inicio: "12/11/2021", Registros: 14 }];
  let dateFilter: Date;
  if (filterValue > 0) {
    dateFilter = new Date(new Date().setDate(new Date().getDate() - filterValue));
  }
  else {
    dateFilter = new Date("10/10/1970");
  }

  const [openConfigModal, setOpenConfigModal] = useState<boolean>(false);
  const [openGraphModal, setOpenGraphModal] = useState<boolean>(false);

  function handleConfigModal() {
    setOpenConfigModal(!openConfigModal);
  }
  function handleGraphModal() {
    setOpenGraphModal(!openGraphModal);
  }
  
  const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(29 78 216)",
      },
      secondary: {
        main: "#ffffff",
      },
    }
  });

  const textoPesquisa = showQuery ? showQuery : "";

  return (
    <>
      {Consultas.map((val, key) => {
        const dataInicio = Date.parse(val.inicio);

        if (dataInicio > dateFilter.getTime()) {
          if (val.Executor.toLowerCase().includes(textoPesquisa.toLowerCase())) {
            return (
              <div key={key} className="ConsultaItem shadow-lg">
                <div className="ConsultaItemHeader">
                  <div className="ConsultaItemId">{val.id}</div>
                  <span>Consultas {key + 1}</span>
                </div>
                <div className="ConsultaCorpo">
                  <li className="QueryFormatli">
                    <ul className="QueryFormatul"><AccountCircleOutlinedIcon sx={{ fontSize: 12.5 }} className="QueryIcon" />Executor: <b>{val.Executor}</b></ul>
                    <ul className="QueryFormatul"><CalendarMonthOutlinedIcon sx={{ fontSize: 12.5 }} className="QueryIcon" />Iniciada em: <b>{val.inicio}</b></ul>
                    <ul className="QueryFormatul"><AssignmentLateOutlinedIcon sx={{ fontSize: 12.5 }} className="QueryIcon" />Registros: <b>{val.Registros}</b></ul>

                  </li>
                  <ThemeProvider theme={theme}>
                    <IconButton onClick={handleGraphModal} className="InsertChartIcon" color="primary"><InsertChartOutlinedTwoToneIcon /></IconButton>
                    <Modal
                      open={openGraphModal}
                      onClose={handleGraphModal}
                    >
                      <GraficoModal />
                    </Modal>
                  </ThemeProvider>
                  <ThemeProvider theme={theme}>
                    <IconButton onClick={handleConfigModal} className="SettingsIcon" color="primary"><SettingsOutlinedIcon /></IconButton>
                    <Modal
                      open={openConfigModal}
                      onClose={handleConfigModal}
                    >
                      <ConfigModal />
                    </Modal>
                  </ThemeProvider>
                </div>
              </div>
            );
          }
        }
      })}
    </>
  );
}