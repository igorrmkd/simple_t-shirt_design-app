import "./Canvas.css";
import React from "react";
import { FabricJSCanvas } from "fabricjs-react";

function Canvas() {
  return (
    <div>
      <FabricJSCanvas className="sample-canvas" />
    </div>
  );
}

export default Canvas;
