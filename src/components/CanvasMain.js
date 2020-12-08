import "./CanvasMain.css";
import React, {useContext} from "react";
// import BaseShirt from "./components/BaseShirt";
import { ColorContext } from "../contexts/colorContext";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";

function CanvasMain(props) {
  const { updateColor } = useContext(ColorContext);
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
      <h2>Design here</h2>
      <button onClick={onAddCircle}>Add circle</button>
      <button onClick={onAddRectangle}>Add Rectangle</button>
      <button onClick={onAddLine}>Add Line</button>
      <div className="bigCanvas" style={{backgroundColor: updateColor}}>
      <FabricJSCanvas className="main-canvas" onReady={onReady} />
      </div>
    </div>
  );
}

export default CanvasMain;
