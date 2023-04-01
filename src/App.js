import React from "react";
import PeriodicTable from "./periodic-table/PeriodicTable";
import Footer from "./footer/Footer";
import "./App.css";
import Navbar from "./navbar/Navbar";

function App() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    console.log(checked);
  };
  return (
    <div className="app">
      <Navbar checked={checked} handleChange={handleChange}></Navbar>
      <PeriodicTable checked={checked} />
      <Footer checked={checked}></Footer>
    </div>
  );
}

export default App;
