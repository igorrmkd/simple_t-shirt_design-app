import "./Canvas.css";
import React from "react";
// import BaseShirt from "./components/BaseShirt";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";

function Canvas() {
  const { editor, onReady } = useFabricJSEditor();
  const onAddCircle = () => {
    editor.addCircle();
  };
  const onAddRectangle = () => {
    editor.addRectangle();
  };

  return (
    <div>
      <h1>Hi from FabricJS</h1>
      <button onClick={onAddCircle}>Add circle</button>
      <button onClick={onAddRectangle}>Add Rectangle</button>
      <FabricJSCanvas className="sample-canvas" onReady={onReady} />
    </div>
  );
}

export default Canvas;
