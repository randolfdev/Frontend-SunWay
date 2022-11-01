import React from "react";
import LanOutlinedIcon from "@mui/icons-material/LanOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import InsertChartOutlinedTwoToneIcon from "@mui/icons-material/InsertChartOutlinedTwoTone";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";


export const SidebarData = [
  {
    title: "Consultas",
    icon: <LanOutlinedIcon/>,
    link: "/Consultas"
  },
  {
    title: "Clientes",
    icon: <ContactsOutlinedIcon />,
    link: "/Clientes"
  },
  {
    title: "Relatórios",
    icon: <InsertChartOutlinedTwoToneIcon />,
    link: "/Relatorios"
  },
  {
    title: "Contas",
    icon: <GroupOutlinedIcon />,
    link: "/Contas"
  }
];