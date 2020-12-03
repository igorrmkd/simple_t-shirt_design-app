import "./App.css";
import theShirt from "./img/background_tshirt.png";
// import batman from "./img/batman2.png";
import React, { useState } from "react";
import ColorPicker from "./components/ColorPicker";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";

export default function App() {
  const { editor, onReady } = useFabricJSEditor();
  const onAddCircle = () => {
    editor.addCircle();
  };
  const onAddRectangle = () => {
    editor.addRectangle();
  };

  const [shirtColor, setShirtColor] = useState("");

  console.log(shirtColor);

  function changeColor(event) {
    event.preventDefault();
    setShirtColor("green");
  }
  console.log(shirtColor);

  return (
    <div className="App">
      <h1>Simple t-shirt designer with FabricJS and ReactJS</h1>
      <button onClick={onAddCircle}>Add circle</button>
      <button onClick={onAddRectangle}>Add Rectangle</button>
      <FabricJSCanvas className="sample-canvas" onReady={onReady} />
      <img
        style={{ backgroundColor: shirtColor }}
        src={theShirt}
        alt="theShirt"
        className="shirt"
      />

      <button onClick={changeColor}>Color</button>

      <ColorPicker />
    </div>
  );
}

// value="#fff">White
// value="#000">Black
// value="#f00">Red
// value="#008000">Green
// value="#ff0">Yellow
