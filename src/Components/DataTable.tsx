import React, {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {db} from "../utils/firebaseUtils";
import {collection, query, onSnapshot} from "firebase/firestore"
// @ts-ignore
import DocumentData = firebase.firestore.DocumentData;
import csIcon from "../assets/counter-strike.svg"
import forzaIcon from "../assets/forza-horizon.svg"
import valIcon from "../assets/valorant.svg"

export const DataTable = () => {

  const [tableData, setTableData] = useState<DocumentData>([]);

  useEffect(() => {
    const q = query(collection(db, "Membros"));
    onSnapshot(q, (querySnapshot) => {
      setTableData(querySnapshot.docs.map(doc => ({
        info: doc.data()
      })))
    })
  }, [])

  return <React.Fragment>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Nome</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Jogos</TableCell>
          <TableCell>Ícones</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          tableData.map((table: any) =>
              <TableRow key={table.info?.Username}>
                <TableCell>{table.info?.Nome}</TableCell>
                <TableCell>
                  {table.info?.Username}
                </TableCell>
                <TableCell>{table.info?.Jogos}</TableCell>
                <TableCell>
                  {table.info?.Jogos.includes("Valorant") ? <img src={valIcon} alt="Forza Horizon"></img> : null}
                  {table.info?.Jogos.includes("Counter-Strike") ? <img src={csIcon} alt="Forza Horizon"></img> : null}
                  {table.info?.Jogos.includes("Forza") ? <img src={forzaIcon} alt="Forza Horizon"></img> : null}
                </TableCell>
              </TableRow>
          )
        }
      </TableBody>
    </Table>
  </React.Fragment>
};