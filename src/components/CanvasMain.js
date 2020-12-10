import "./CanvasMain.css";
import React, { useContext, useRef, useEffect, useState } from "react";
import { ColorContext } from "../contexts/colorContext";

function CanvasMain(props) {
  const { updateColor } = useContext(ColorContext);
  //  Drawing freehand

  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = `492` * 2;
    canvas.height = `692` * 2;
    canvas.style.width = `492px`;
    canvas.style.height = `692x`;

    const context = canvas.getContext("2d");
    context.scale(2, 2);
    context.lineCap = "round";
    context.strokeStyle = "black";
    context.lineWidth = 5;
    contextRef.current = context;
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  // end drawing freehand

  // clear the canvas

  function clearCanvas() {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  // end clear the canvas

  return (
    <div className="mainCanvasDiv">
      <div className="buttonsTop">
        <div className="preview">
          <button className="btns">Preview</button>
        </div>
        <h2>Design here</h2>
        <div className="download">
          <button className="btns">Download</button>
        </div>
      </div>
      <div className="buttonsBottom">
        <div className="text">
          <button className="btns">Type</button>
        </div>
        <div className="textColor">
          <button className="btns">Text Color</button>
        </div>

        <div className="draw">
          <button className="btns">Draw</button>
        </div>
        <div className="drawColor">
          <button className="btns">Brush Color</button>
        </div>

        <div className="erase">
          <button className="btns">Erase</button>
        </div>

        <div className="clearButton">
          <button className="btns" ref={canvasRef} onClick={clearCanvas}>
            Clear
          </button>
        </div>
      </div>

      <div className="bigCanvas" style={{ backgroundColor: updateColor }}>
        <canvas
          className="main-canvas"
          onMouseDown={startDrawing}
          onMouseUp={finishDrawing}
          onMouseMove={draw}
          ref={canvasRef}
        />
      </div>
    </div>
  );
}

export default CanvasMain;
