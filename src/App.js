import React from "react";
import PeriodicTable from "./periodic-table/PeriodicTable";
import Footer from "./footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="heading">Periodic Table</div>
      <PeriodicTable />
      <Footer></Footer>
    </div>
  );
}

export default App;
