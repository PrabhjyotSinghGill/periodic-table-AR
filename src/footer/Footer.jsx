import React from "react";
import "./Footer.css";
import data from "./FooterData.json";

function Footer({ checked }) {
  return (
    <div className="footer">
      {data.elementTypes.map((footerElement) => (
        <div
          className="footerElement"
          key={footerElement}
          style={{
            gridRow: footerElement.ypos,
            gridColumn: footerElement.xpos,
            // background: checked
            //   ? footerElement.bkgcolordark
            //   : footerElement.bkgcolor,
            color: checked
              ? footerElement.bordercolordark
              : footerElement.bordercolor,
          }}
        >
          {footerElement.name}
        </div>
      ))}
    </div>
  );
}

export default Footer;
