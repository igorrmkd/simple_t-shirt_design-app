import "./App.css";
import theShirt from "./img/background_tshirt.png";
// import batman from "./img/batman2.png";
import React from "react";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";

export default function App() {
  const { editor, onReady } = useFabricJSEditor();
  // const onAddCircle = () => {
  //   editor.addCircle();
  // };
  // const onAddRectangle = () => {
  //   editor.addRectangle();
  // };

  return (
    <div className="App">
      <h1>Simple t-shirt designer with FabricJS and ReactJS</h1>
      {/* <button onClick={onAddCircle}>Add circle</button>
      <button onClick={onAddRectangle}>Add Rectangle</button> */}
      <FabricJSCanvas className="sample-canvas" onReady={onReady} />
      <img src={theShirt} alt="theShirt" className="shirt" />

      {/* image upload */}

      {/* <label htmlFor="tshirt-design">T-Shirt Design:</label>
      <select id="tshirt-design">
        <option value="">Select one of our designs ...</option>
        <option value={batman}>Batman</option>
      </select> */}

      {/* change the color of the T-Shirt */}
      <label htmlFor="tshirt-color">T-Shirt Color:</label>
      <select id="tshirt-color">
        <option value="#fff">White</option>
        <option value="#000">Black</option>
        <option value="#f00">Red</option>
        <option value="#008000">Green</option>
        <option value="#ff0">Yellow</option>
      </select>
    </div>
  );
}
