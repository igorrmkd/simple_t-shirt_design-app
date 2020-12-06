import "./Canvas.css";
import React from "react";
// import BaseShirt from "./components/BaseShirt";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";

function Canvas() {
  return (
    <div className="simpleCanvasDiv">
      <FabricJSCanvas className="sample-canvas" />
    </div>
  );
}

export default Canvas;
