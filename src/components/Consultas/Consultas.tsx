import React, { EventHandler, MouseEventHandler, useState } from "react";
import Logout from "../Logout";
import ConsultaItem from "./ConsultaItem";
import Navbar from "./Navbar";
import { SelectChangeEvent } from "@mui/material";

//O PLANO:
//Navbar com pesquisa, filtro e nova extrção
//div grid com as Consultas
//componente de item de Consultas

// interface dashboardProps {
//   user: string,
//   // logout: MouseEventHandler
// }


export default function Consultas() {
  
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

    <div className="ConsultasWrapper">
      <Navbar filterValue={filterValue} handleFilterValue={handleFilterValue} handleSearchPress={handleSearchPress} handleShowQueryState={handleShowQueryState} />
      <div className="ConsultasGrid">   
        <ConsultaItem showQuery = {showQuery}
          filterValue = {filterValue}/>     
      </div>
    </div>
  );
}

