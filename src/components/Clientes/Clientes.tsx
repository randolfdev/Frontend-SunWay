import React, { EventHandler, MouseEventHandler, useState } from "react";
import Logout from "../Login/Logout";
import ClienteItem from "./ClienteItem";
import Navbar from "./Navbar";
import { SelectChangeEvent } from "@mui/material";

//O PLANO:
//Navbar com pesquisa, filtro e nova extrção
//div grid com as Clientes
//componente de item de Clientes

// interface dashboardProps {
//   user: string,
//   // logout: MouseEventHandler
// }


export default function Clientes() {

  const [showQuery, setShowQuery] = useState<string>("");

  const handleShowQueryState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowQuery(e.target.value);
  };

  const handleSearchPress = () => {
    alert(showQuery);
  };

  return (

    <div className="ClientesWrapper">
      <Navbar handleSearchPress={handleSearchPress} handleShowQueryState={handleShowQueryState} />
      <div className="ClientesGrid">
        <ClienteItem showQuery={showQuery} />
      </div>
    </div>
  );
}

