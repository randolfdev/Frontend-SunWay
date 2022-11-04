import React, { EventHandler, MouseEventHandler, useState } from "react";
import Logout from "../Login/Logout";
import ContaItem from "./ContaItem";
import Navbar from "./Navbar";
import { SelectChangeEvent, Box } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

export default function Contas() {

  const [showQuery, setShowQuery] = useState<string>("");

  const [filterValue, setFilterValue] = useState<number>(0);

  const handleShowQueryState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowQuery(e.target.value);
  };

  const handleSearchPress = () => {
    alert(showQuery);
  };

  function handleFilterValue(e: SelectChangeEvent<number>) {
    const filtro = e.target.value as number;
    setFilterValue(filtro);
  }

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "fullName",
      headerName: "Email",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 230,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ""} ${params.row.lastName + "@gmail.com" || ""}`,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 54 },
    { id: 6, lastName: "Melisandre", firstName: "Edward", age: 15 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  return (

    <div className="ContasWrapper">
      <Navbar filterValue={filterValue} handleFilterValue={handleFilterValue} handleSearchPress={handleSearchPress} handleShowQueryState={handleShowQueryState} />
      <Box className="ContasGrid" boxShadow={5}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[5]}
        />
      </Box>
    </div>
  );
}

