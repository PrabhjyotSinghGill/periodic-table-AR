import React from "react";
import "./Info.css";

function Info({ atomicNumber }) {
  return (
    <div className="info">
      Info
      <model-viewer
        src={process.env.PUBLIC_URL + `/${atomicNumber}.glb`}
        autoplay=""
        bounds="tight"
        camera-controls=""
        camera-orbit="-0.6751deg 70.99deg 1.4m"
        exposure="0.3"
        field-of-view="20deg"
        max-camera-orbit="auto 180deg auto"
        min-camera-orbit="auto 0deg auto"
        alt="3D Bohr model of the element Bromine"
        auto-rotate
        data-model-viewer-library-version="2.1.3"
      ></model-viewer>
    </div>
  );
}

export default Info;
