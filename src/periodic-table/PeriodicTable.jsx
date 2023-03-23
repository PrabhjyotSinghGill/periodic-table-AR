import React from "react";
import data from "./PeriodicTableJSON.json";
import "./PeriodicTable.css";
import { colorMap, colorMapFontColor, colorMapBackground } from "./ColorScheme";

const PeriodicTable = () => {
  return (
    <div className="periodic-table">
      {data.elements.map((element) => (
        <div
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
    </div>
  );
};

export default PeriodicTable;
