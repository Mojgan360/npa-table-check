import { useState } from "react";
import BasicTable from "./components/BasicTable";
import Columns from "./components/tabel-api/Columns";
import TabelApi from "./components/tabel-api/TabelApi";
import SortTable from "./components/tabel-api/SortTable";
import "./App.css";
function App() {
  return (
    <>
      {/* <BasicTable /> */}
      <Columns />
      {/* <SortTable />
      <TabelApi /> */}
    </>
  );
}

export default App;
