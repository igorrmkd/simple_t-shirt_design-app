import "./CanvasMain.css";
import React, {useContext, useRef, useEffect, useState} from "react";
import { ColorContext } from "../contexts/colorContext";

function CanvasMain(props) {
  const { updateColor } = useContext(ColorContext);
//  Drawing freehand 

  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const [isDrawing, setIsDrawing] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = `606` * 2;
    canvas.height = `686` * 2;
    canvas.style.width = `606px`;
    canvas.style.height = `686px`;


    const context = canvas.getContext("2d")
    context.scale(2,2)
    context.lineCap = "round"
    context.strokeStyle = "black"
    context.lineWidth = 5
    contextRef.current = context;
  }, [])

  const startDrawing = ({nativeEvent}) => {
    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.beginPath()
    contextRef.current.moveTo(offsetX, offsetY)
    setIsDrawing(true)
  }

  const finishDrawing = () => {
   contextRef.current.closePath()
   setIsDrawing(false)
  }

  const draw = ({nativeEvent}) => {
    if(!isDrawing){
      return
    }
    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY)
    contextRef.current.stroke()
  }

  // end drawing freehand

  // clear the canvas
 
  function clearCanvas() {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d")
      context.clearRect(0, 0, canvas.width, canvas.height);
  }

  // end clear the canvas
    
  return (
    <div className="mainCanvasDiv">
      <h2>Design here</h2>


      <div className="clearButton">
        <button ref={canvasRef} onClick={clearCanvas}>Clear</button>
      </div>



      <div className="bigCanvas" style={{backgroundColor: updateColor}}>
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
