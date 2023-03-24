import * as React from "react";
import data from "./PeriodicTableJSON.json";
import "./PeriodicTable.css";
import { colorMap, colorMapFontColor, colorMapBackground } from "./ColorScheme";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const PeriodicTable = () => {
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
            background: colorMapBackground[element.category],
            color: colorMapFontColor[element.category],
          }}
        >
          <strong>{element.symbol}</strong>
          <small className="number">{element.number}</small>
          <small className="name">{element.name}</small>
        </div>
      ))}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        element={elementObject}
      >
        <DialogTitle id="alert-dialog-title">{elementObject.name}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {elementObject.summary}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PeriodicTable;
