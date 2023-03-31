import React from "react";
import "./ModelViewer.css";

function ModelViewer({ atomicNumber }) {
  return (
    <model-viewer
      src={process.env.PUBLIC_URL + `/${atomicNumber}.glb`}
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
  );
}

export default ModelViewer;
