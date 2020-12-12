import "./CanvasMain.css";
import "./PopoverPicker.css";
import React, { useContext, useRef, useEffect, useState } from "react";
import { ColorContext } from "../contexts/colorContext";
import { PopoverPicker } from "./PopoverPicker";

function CanvasMain(props) {
  const { updateColor } = useContext(ColorContext);
  const [brushColor, setBrushColor] = useState("#10bef3");
  const [textColor, setTextColor] = useState("#182c2e");

  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushState, setBrushState] = useState(false);
  const [brushSize, setBrushSize] = useState(10);
  // const [fontSize, setFontSize] = useState(false);

  /////////////////////////////////////////////////////---------------
  let isEraser = false;
  let drawnArray = [];
  let erasedArray = [];
  let eraserColor = updateColor;

  function eraser(e) {
    isEraser = true;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.strokeStyle = eraserColor;
    context.lineWidth = brushSize + 10;
    storeErased(eraserColor);
    // console.log(e);
  }

  // Store Drawn Lines in DrawnArray
  function storeDrawn(x, y, size, color, erase) {
    const line = {
      x,
      y,
      size,
      color,
      erase,
    };
    // console.log(line);
    drawnArray.push(line);
  }
  function storeErased(color) {
    const line = { color };
    console.log(line);
    erasedArray.push(line);
  }
  /////////////////////////////////////////////////////---------------

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = `492` * 2;
    canvas.height = `660` * 2;
    canvas.style.width = `492px`;
    canvas.style.height = `660x`;

    const context = canvas.getContext("2d");
    context.scale(2, 2);
    context.lineCap = "round";
    contextRef.current = context;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.lineCap = "round";
    context.strokeStyle = brushColor;
    context.lineWidth = brushSize;
    contextRef.current = context;
  }, [brushSize, brushColor]);

  function onClickBrushSize(e) {
    if (e.target.classList[1] === "sizePlus") {
      setBrushSize(brushSize + 2);
    } else if (e.target.classList[1] === "sizePlus" || brushSize > 0) {
      setBrushSize(brushSize - 2);
    }
  }

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
      storeDrawn(offsetX, offsetY, brushSize, brushColor, isEraser);
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
        <div className="textColor">
          <PopoverPicker color={textColor} onChange={setTextColor} />
        </div>
        <div className="font">
          <button className="btns">Font</button>
        </div>
        <div className="brushColor">
          <PopoverPicker color={brushColor} onChange={setBrushColor} />
        </div>

        <div className="save">
          <button className="btns">Save</button>
        </div>
      </div>
      <div className="buttonsMiddle">
        <div className="font">
          <button className="btns sizePlus">+</button>
          <button className="btns sizeMinus">-</button>
        </div>
        <div className="group">
          <button className="btns">Group</button>
        </div>
        <div className="brushSize">
          <button className="btns sizePlus" onClick={onClickBrushSize}>
            +
          </button>
          <button className="btns sizeMinus" onClick={onClickBrushSize}>
            -
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

        <div className="erase">
          <button className="btns" onClick={eraser}>
            Erase
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
