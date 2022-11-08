import React, { useState } from "react";
import Navbar from "./Navbar";
import { SelectChangeEvent } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function createData(
  nomeCliente: string,
  empresa: string ,
  cnpj: string,
  dataCadastro: string,
  status: string,
) {
  return {
    nomeCliente,
    empresa,
    cnpj,
    dataCadastro,
    status,
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell component="th" scope="row">
          {row.nomeCliente}
        </TableCell>
        <TableCell align="left">{row.empresa}</TableCell>
        <TableCell align="left">{row.cnpj}</TableCell>
        <TableCell align="center">{row.dataCadastro}</TableCell>
        <TableCell align="right">{row.status}</TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData("Daniel", "Teste 1", "xx.xxx.xxx/0001-XX", "22/08/21 18h33", "Ativo"),
  createData("Enedir", "Teste 2", "xx.xxx.xxx/0001-XX", "22/08/21 18h33", "Ativo"),
  createData("Diogo", "Teste 3", "xx.xxx.xxx/0001-XX", "22/08/21 18h33", "Inativo"),
  // createData("Cliente unidade D", "Empresa D", 67, 4.3, 2.5),
  // createData("Cliente Hospital E", "Empresa F", 49, 3.9, 1.5),
];

export default function CollapsibleTable() {

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
        <TableContainer component={Paper} sx={{ boxShadow:"0px 0px 0px 0px" , height:"auto", backgroundColor:"transparent"}}>
          <Table className="ClienteTableRow" aria-label="collapsible table" sx={{ height:"max-content"}}>
            <TableHead  sx={{ "& .MuiTableCell-head": {  backgroundColor: "white", color: "rgb(29 78 216)" }}}>
              <TableRow className="shadow-md" sx={{borderRadius:"20px"}}>
                <TableCell  sx={{borderRadius:"20px 0px 0px 20px"}}>Nome do Cliente</TableCell>
                <TableCell  align="left">Empresa</TableCell>
                <TableCell  align="left">CNPJ</TableCell>
                <TableCell  align="center">Data de Cadastro</TableCell>
                <TableCell  align="right" sx={{borderRadius:"0px 20px 20px 0px"}}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row key={row.nomeCliente} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>

  );
}



