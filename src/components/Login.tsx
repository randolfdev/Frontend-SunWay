import React, { useState } from "react";
import "./Login.css";
import { Button, Input, Icon, FormControl, Box, SelectChangeEvent, TextField, InputLabel } from "@mui/material";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import { useNavigate} from "react-router-dom";

export default function Login(props: any): JSX.Element {
  const Users = [{ Login: "spy", Password: "1234" }, { Login: "Incortec", Password: "1001" }, { Login: "Philips", Password: "0011" }];

  const [LoginText, setLoginText] = useState<string>("");
  const [Password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(29,78,216)",
      },
      secondary: {
        main: "#ffffff",
      },
    },
  });

  const handleLoginText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginText(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleButtonInput = () => {
    if (Users[0].Login === LoginText && Users[0].Password === Password ) {
      navigate("/Consultas");
      alert("teste");
    }
  };

  return (
    <Box className="box" boxShadow={8}>
      <AccountCircleOutlinedIcon sx={{ fontSize: 100 }} className="LoginImage" color="primary" />
      <div className="LoginText LoginTextBorder">
        <TextField fullWidth variant="outlined" placeholder="Login" id="Login" type="text" onChange={handleLoginText}
        />
      </div>
      <div className="PasswordText PasswordTextBorder">
        <TextField fullWidth placeholder="Password" id="password" type="password" onChange={handlePassword}
        />
      </div>
      <ThemeProvider theme={theme}>
        <Button type="button" color="primary" className="LoginButton" onClick={handleButtonInput}>
          Acess
        </Button>
      </ThemeProvider>
    </Box>
  );
}