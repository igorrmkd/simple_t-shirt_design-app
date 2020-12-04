import "./App.css";
import React from "react";
import BaseShirt from "./components/BaseShirt";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";

export default function App() {
  const { editor, onReady } = useFabricJSEditor();
  const onAddCircle = () => {
    editor.addCircle();
  };
  const onAddRectangle = () => {
    editor.addRectangle();
  };

  return (
    <div className="App">
      <h1>Simple t-shirt designer with FabricJS and ReactJS</h1>
      <button onClick={onAddCircle}>Add circle</button>
      <button onClick={onAddRectangle}>Add Rectangle</button>
      <FabricJSCanvas className="sample-canvas" onReady={onReady} />

      <BaseShirt />
    </div>
  );
}
