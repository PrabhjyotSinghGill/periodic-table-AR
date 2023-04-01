import * as React from "react";
import data from "./PeriodicTableJSON.json";
import "./PeriodicTable.css";
import {
  colorMapFontColorDark,
  colorMapBackgroundDark,
  colorMapFontColor,
  colorMapBackground,
} from "./ColorScheme";
import DialogDisplay from "../dialog/DialogDisplay";

const PeriodicTable = ({ checked }) => {
  const [elementObject, setElementObject] = React.useState("");
  const [open, setOpen] = React.useState(false);

  function handleClickOpen(elementValue) {
    setOpen(true);
    setElementObject(elementValue);
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="periodic-table">
      {data.elements.map((element) => (
        <div
          onClick={(e) => handleClickOpen(element, e)}
          className="element"
          key={element.name}
          style={{
            gridRow: element.ypos,
            gridColumn: element.xpos,
            background: checked
              ? colorMapBackgroundDark[element.category]
              : colorMapBackground[element.category],
            color: checked
              ? colorMapFontColorDark[element.category]
              : colorMapFontColor[element.category],
          }}
        >
          <strong>{element.symbol}</strong>
          <small className="number">{element.number}</small>
          <small className="name">{element.name}</small>
        </div>
      ))}
      <DialogDisplay
        checked={checked}
        elementObject={elementObject}
        handleClose={handleClose}
        open={open}
      ></DialogDisplay>
    </div>
  );
};

export default PeriodicTable;
