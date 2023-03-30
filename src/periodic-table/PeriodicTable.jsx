import * as React from "react";
import data from "./PeriodicTableJSON.json";
import "./PeriodicTable.css";
import {
  colorMapFontColorDark,
  colorMapBackgroundDark,
  colorMapFontColor,
  colorMapBackground,
} from "./ColorScheme";
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
        <DialogTitle id="alert-dialog-title">
          <div className="dialog-title" onClick={handleClose}>
            <div
              className="element-icon"
              style={{
                background: colorMapBackground[elementObject.category],
                color: colorMapFontColor[elementObject.category],
              }}
            >
              <div className="small">{elementObject.number}</div>
              <div className="symbol">{elementObject.symbol}</div>
              <div className="small">{elementObject.atomic_mass}</div>
            </div>
            <div>{elementObject.name}</div>
          </div>
        </DialogTitle>
        <div className="model-viewer-container">
          <model-viewer
            src={process.env.PUBLIC_URL + `/${elementObject.number}.glb`}
            className="model"
            autoplay=""
            bounds="tight"
            camera-controls=""
            camera-orbit="-0.6751deg 70.99deg 1.4m"
            exposure="0.3"
            field-of-view="20deg"
            max-camera-orbit="auto 180deg auto"
            min-camera-orbit="auto 0deg auto"
            auto-rotate
          ></model-viewer>
          <div className="small">3D Bohr Model</div>
        </div>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div>
              <b>Summary :</b> {elementObject.summary}
            </div>
            <div>
              <b>Period :</b> {elementObject.period}
            </div>
            <div>
              <b>Atomic Mass :</b> {elementObject.atomic_mass}
            </div>
            <div>
              <b>Category :</b> {elementObject.category}
            </div>
            <div>
              <b>Shells :</b> {elementObject.shells}
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PeriodicTable;
