import React, { useState } from "react";
import "./BaseShirt.css";
import theShirt from "../img/background_tshirt.png";
import Canvas from "./Canvas";

function BaseShirt() {
  const [shirtColor, setShirtColor] = useState("");

  function changeColor(event) {
    event.preventDefault();
    setShirtColor(event.target.className);
  }

  return (
    <div className="imgCanvasColor">
      <h2>Change shirt color</h2>
      <div>
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
            style={{ backgroundColor: shirtColor }}
            src={theShirt}
            alt="theShirt"
          />
        </div>
      </div>
    </div>
  );
}

export default BaseShirt;
