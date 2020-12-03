import "./App.css";
import theShirt from "./img/background_tshirt.png";
import React from "react";
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
      <h1>FabricJS React Sample</h1>
      <button onClick={onAddCircle}>Add circle</button>
      <button onClick={onAddRectangle}>Add Rectangle</button>
      <FabricJSCanvas className="sample-canvas" onReady={onReady} />
      <img src={theShirt} alt="theShirt" className="shirt" />
    </div>
  );
}

// import theShirt from "./img/background_tshirt.png";
//<img src={logo} alt="Logo" />
