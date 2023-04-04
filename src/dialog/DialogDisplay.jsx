import * as React from "react";
import ModelViewer from "../model-viewer/ModelViewer";
import {
  colorMapFontColorDark,
  colorMapBackgroundDark,
  colorMapFontColor,
  colorMapBackground,
} from "../periodic-table/ColorScheme";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "./DialogDisplay.css";

function DialogDisplay({ elementObject, handleClose, open, checked }) {
  return (
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
              background: checked
                ? colorMapBackgroundDark[elementObject.category]
                : colorMapBackground[elementObject.category],
              color: checked
                ? colorMapFontColorDark[elementObject.category]
                : colorMapFontColor[elementObject.category],
            }}
          >
            <div className="smallNumber">
              <div>{elementObject.number}</div>
              <div>{elementObject.atomic_mass}</div>
            </div>
            <div className="symbol">{elementObject.symbol}</div>
            <div className="smallName">{elementObject.name}</div>
          </div>
          <div>{elementObject.name}</div>
        </div>
      </DialogTitle>
      <div className="model-viewer-container">
        <ModelViewer atomicNumber={elementObject.number}></ModelViewer>
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
  );
}

export default DialogDisplay;
