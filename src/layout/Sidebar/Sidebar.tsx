import React from "react";
import FaceIcon from "@mui/icons-material/Face";
import { SidebarData } from "./SidebarData";
import "./Sidebar.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { IconButton } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(29 78 216)",
    },
    secondary: {
      main: "#000000",
    },
  },
});


export default function Sidebar(): JSX.Element {
  return (
    <div className="Sidebar">
      <div className="SidebarHeader">
        <img src="logoincortec.jpg" alt="placeholder" className="profilePic" />
        <div className="SidebarHeaderLabel">
          <label className="CompanyName">Phillips</label>
          <label className="PersonName">Daniel</label>
        </div>
        <ThemeProvider theme={theme}>
          <IconButton color= "primary"><ArrowDropDownIcon/></IconButton>
        </ThemeProvider>
      </div>
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return(
            <li key={key} className="row" id={window.location.pathname == val.link ? "active" : ""} onClick={() => window.location.pathname = val.link}>
              {" "}
              <div id="Icon">{val.icon}</div>{" "}
              <div id="title">
                {val.title}
              </div>
            </li>
          );    
        })}
      </ul>
    </div>
  );
}