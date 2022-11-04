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



export default function ConsultaModal() {

  return (
    <Box className="NotificacaoContaModal">
      <Box className="NotificacaoContaModalTitle">
        <h1 id="NotificacaoContaTitle">Notificações</h1>
      </Box>
    </Box>
  );
}