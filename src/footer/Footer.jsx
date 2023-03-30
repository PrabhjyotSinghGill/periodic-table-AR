import React from "react";
import "./Footer.css";
import data from "./FooterData.json";

function Footer() {
  return (
    <div className="footer">
      {data.elementTypes.map((footerElement) => (
        <div
          className="footerElement"
          key={footerElement}
          style={{
            gridRow: footerElement.ypos,
            gridColumn: footerElement.xpos,
            // background: element.bkgcolor,
            color: footerElement.bordercolor,
          }}
        >
          {footerElement.name}
        </div>
      ))}
    </div>
  );
}

export default Footer;
