import SwitchColor from "./switch-color/SwitchColor";

function Navbar({ checked, handleChange }) {
  return (
    <div className="heading">
      <div className="heading__ptable">Periodic Table</div>
      <div className="switch">
        <SwitchColor
          checked={checked}
          handleChange={handleChange}
        ></SwitchColor>
      </div>
    </div>
  );
}

export default Navbar;
