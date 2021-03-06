import React, { useContext } from "react";
import "./BaseShirt.css";
import theShirt from "../img/background_tshirt.png";
import { ColorContext } from "../contexts/colorContext";
import Canvas from "./Canvas";

function BaseShirt(props) {
  const { updateColor, changeColor } = useContext(ColorContext);
  return (
    <div className="imgCanvasColor">
      <div className="buttons">
        <div className="canvasOnOff">
          <button className="btns">Canvas</button>
        </div>
        <div className="previewShirt">
          <button className="btns">Preview</button>
        </div>
        <div className="uploadImg">
          <button className="btns">Upload</button>
        </div>
        <div className="download">
          <button className="btns">Download</button>
        </div>
      </div>
      {/* <h2>Preview Shirt</h2> */}
      <div className="colorButtons">
        <button
          className="violet"
          id="btn-style"
          style={{ backgroundColor: "violet", color: "black" }}
          onClick={changeColor}
        ></button>
        <button
          className="crimson"
          id="btn-style"
          style={{ backgroundColor: "crimson", color: "white" }}
          onClick={changeColor}
        ></button>
        <button
          className="orange"
          id="btn-style"
          style={{ backgroundColor: "orange", color: "black" }}
          onClick={changeColor}
        ></button>
        <button
          className="gold"
          id="btn-style"
          style={{ backgroundColor: "gold", color: "black" }}
          onClick={changeColor}
        ></button>
        <button
          className="seagreen"
          id="btn-style"
          style={{ backgroundColor: "seagreen", color: "white" }}
          onClick={changeColor}
        ></button>
        <button
          className="royalblue"
          id="btn-style"
          style={{ backgroundColor: "royalblue", color: "white" }}
          onClick={changeColor}
        ></button>
        <button
          className="navy"
          id="btn-style"
          style={{ backgroundColor: "navy", color: "white" }}
          onClick={changeColor}
        ></button>
        <button
          className="black"
          id="btn-style"
          style={{ backgroundColor: "black", color: "white" }}
          onClick={changeColor}
        ></button>
        <button
          className="darkslategrey"
          id="btn-style"
          style={{ backgroundColor: "darkslategrey", color: "white" }}
          onClick={changeColor}
        ></button>
        <button
          className="slategrey"
          id="btn-style"
          style={{ backgroundColor: "slategrey", color: "white" }}
          onClick={changeColor}
        ></button>
        <button
          className="whitesmoke"
          id="btn-style"
          style={{ backgroundColor: "whitesmoke", color: "black" }}
          onClick={changeColor}
        ></button>
      </div>
      <div className="imageCanvasWrap">
        <div className="insideWrapper">
          <Canvas />
          <img
            className="shirt"
            style={{ backgroundColor: updateColor }}
            src={theShirt}
            alt="theShirt"
          />
        </div>
      </div>
    </div>
  );
}

export default BaseShirt;
