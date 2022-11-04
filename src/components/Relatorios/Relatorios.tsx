import React, { useState } from "react";
import Navbar from "./Navbar";
import { SelectChangeEvent } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";


//O PLANO:
//Navbar com pesquisa, filtro e nova extrção
//div grid com as Relatorios
//componente de item de Relatorios

// interface dashboardProps {
//   user: string,
//   // logout: MouseEventHandler
// }

interface Column {
  id: "name" | "code" | "population" | "size" | "density";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "name", label: "Nome do Relatório", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "population",
    label: "Código x",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Código y",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Código z",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  name: string;
  code: string;
  population: number;
  size: number;
  density: number;
}

function createData(
  name: string,
  code: string,
  population: number,
  size: number,
): Data {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData("Preço", "IN", 1324171354, 3287263),
  createData("Faturamento", "CN", 1403500365, 9596961),
  createData("Diário", "IT", 60483973, 301340),
  createData("Mensal", "US", 327167434, 9833520),
  createData("Anual", "CA", 37602103, 9984670),
  createData("Trimestre", "AU", 25475400, 7692024),
  createData("Qualidade", "DE", 83019200, 357578),
  createData("Preço item", "IE", 4857000, 70273),
  createData("Faixa de preço", "MX", 126577691, 1972550),
  createData("Faturamento diário", "JP", 126317000, 377973),
  createData("Procedimento", "FR", 67022000, 640679),
  createData("Orçamento", "GB", 67545757, 242495),
  createData("Preço", "RU", 146793744, 17098246),
  createData("Trimestral", "NG", 200962417, 923768),
  createData("Diário", "BR", 210147125, 8515767),
];


export default function Relatorios() {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(7);


  const [showQuery, setShowQuery] = useState<string>("");

  const [filterValue, setFilterValue] = useState<number>(0);


  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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

  return (

    <div className="RelatoriosWrapper">
      <Navbar filterValue={filterValue} handleFilterValue={handleFilterValue} handleSearchPress={handleSearchPress} handleShowQueryState={handleShowQueryState} />
      <div className="RelatorioTable">
        <Paper sx={{ width: "100%", overflow: "hidden" }} elevation={10}>
          <TableContainer sx={{ maxHeight: 600 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead sx={{ "& .MuiTableCell-head": { backgroundColor: "rgb(29 78 216)", color: "white" }}}>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </div>

  );
}

