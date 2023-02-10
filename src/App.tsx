import { useState } from 'react'
import './App.css'
import NavBar from "./Components/NavBar";
import {DataTable} from "./Components/DataTable";

function App(this: any) {

  return (
    <>
      <NavBar />
      <DataTable />
    </>

  )
}

export default App
