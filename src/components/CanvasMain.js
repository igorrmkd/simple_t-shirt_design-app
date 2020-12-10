import "./CanvasMain.css";
import React, { useContext, useRef, useEffect, useState } from "react";
import { ColorContext } from "../contexts/colorContext";
import "../lib/jscolor";

function CanvasMain(props) {
  const { updateColor } = useContext(ColorContext);

  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushState, setBrushState] = useState(false);

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

  function brushToggle() {
    setBrushState(!brushState);
  }

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
    if (isDrawing && brushState) {
      const { offsetX, offsetY } = nativeEvent;
      contextRef.current.lineTo(offsetX, offsetY);
      contextRef.current.stroke();
    }
  };

  function clearCanvas() {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  return (
    <div className="mainCanvasDiv">
      <div className="buttonsTop">
        <div className="preview">
          <button className="btns">Preview</button>
        </div>
        <div className="erase">
          <button className="btns">Erase</button>
        </div>
        <div className="clearButton">
          <button className="btns" ref={canvasRef} onClick={clearCanvas}>
            Clear
          </button>
        </div>
        <div className="download">
          <button className="btns">Download</button>
        </div>
      </div>
      <div className="buttonsBottom">
        <div className="text">
          <button className="btns">Type</button>
        </div>
        <div className="textColor">
          <button className="btns" data-jscolor="{value:'#57ADC9'}">
            Text
          </button>
        </div>

        <div className="draw">
          <button
            className="btns"
            style={{ color: brushState ? "black" : "red" }}
            onClick={brushToggle}
          >
            Draw
          </button>
        </div>
        <div className="drawColor">
          <button className="btns" data-jscolor="{value:'#62F4AE'}">
            Brush
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
