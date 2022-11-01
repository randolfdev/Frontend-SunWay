import React, { EventHandler, MouseEventHandler, useState } from "react";
import Logout from "../Login/Logout";
import ClienteItem from "./RelatorioItem";
import Navbar from "./Navbar";
import { SelectChangeEvent } from "@mui/material";

//O PLANO:
//Navbar com pesquisa, filtro e nova extrção
//div grid com as Relatorios
//componente de item de Relatorios

// interface dashboardProps {
//   user: string,
//   // logout: MouseEventHandler
// }


export default function Relatorios() {
  
  const [showQuery, setShowQuery] = useState<string>("");

  const [filterValue, setFilterValue] = useState<number>(0);

  const handleShowQueryState = (e: React.ChangeEvent<HTMLInputElement>) =>  {
    setShowQuery(e.target.value);
  };

  const handleSearchPress = () => {
    alert(showQuery);
  };

  function handleFilterValue(e: SelectChangeEvent<number>) {
    const filtro = e.target.value as number;
    setFilterValue (filtro);
  }

  return (

    <div className="RelatoriosWrapper">
      <Navbar filterValue={filterValue} handleFilterValue={handleFilterValue} handleSearchPress={handleSearchPress} handleShowQueryState={handleShowQueryState} />
      <div className="RelatoriosGrid">   
        <ClienteItem showQuery = {showQuery}
          filterValue = {filterValue}/>     
      </div>
    </div>
  );
}

