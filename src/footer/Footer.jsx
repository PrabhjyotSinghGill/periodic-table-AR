import React from "react";
import "./Footer.css";
import data from "./FooterData.json";

function Footer() {
  return (
    <div className="footer">
      {data.elementTypes.map((element) => (
        <div
          className="element"
          key={element}
          style={{
            gridRow: element.ypos,
            gridColumn: element.xpos,
            // background: element.bkgcolor,
            color: element.bordercolor,
          }}
        >
          {element.name}
        </div>
      ))}
    </div>
  );
}

export default Footer;
