import "./App.css";
import theShirt from "./img/background_tshirt.png";
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
      <h1>FabricJS React Sample</h1>
      {/* <button onClick={onAddCircle}>Add circle</button>
      <button onClick={onAddRectangle}>Add Rectangle</button> */}
      <FabricJSCanvas className="sample-canvas" onReady={onReady} />
      <img src={theShirt} alt="theShirt" className="shirt" />

      <label htmlfor="tshirt-design">T-Shirt Design:</label>
      <select id="tshirt-design">
        <option value="">Select one of our designs ...</option>
        <option value="./batman.png">Batman</option>
      </select>

      {/* <!-- The Select that allows the user to change the color of the T-Shirt --> */}
      <label for="tshirt-color">T-Shirt Color:</label>
      <select id="tshirt-color">
        {/* <!-- You can add any color with a new option and definings its hex code --> */}
        <option value="#fff">White</option>
        <option value="#000">Black</option>
        <option value="#f00">Red</option>
        <option value="#008000">Green</option>
        <option value="#ff0">Yellow</option>
      </select>
    </div>
  );
}

// import theShirt from "./img/background_tshirt.png";
//<img src={logo} alt="Logo" />
