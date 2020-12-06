import "./CanvasMain.css";
import React from "react";
// import BaseShirt from "./components/BaseShirt";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";

function CanvasMain() {
  const { editor, onReady } = useFabricJSEditor();
  const onAddCircle = () => {
    editor.addCircle();
  };
  const onAddRectangle = () => {
    editor.addRectangle();
  };
  const onAddLine = () => {
    editor.addLine();
  };

  return (
    <div className="mainCanvasDiv">
      <h3>Design here</h3>
      <button onClick={onAddCircle}>Add circle</button>
      <button onClick={onAddRectangle}>Add Rectangle</button>
      <button onClick={onAddLine}>Add Line</button>
      <FabricJSCanvas className="main-canvas" onReady={onReady} />
    </div>
  );
}

export default CanvasMain;
