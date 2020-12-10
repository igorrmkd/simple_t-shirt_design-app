import "./App.css";
import React from "react";
import BaseShirt from "./components/BaseShirt";
// import Canvas from "./components/Canvas";
import CanvasMain from "./components/CanvasMain";

export default function App() {
  return (
    <div className="App">
      <h1>Simple t-shirt designer with Canvas and React</h1>
      <div className="fullView">
        <BaseShirt />
        <CanvasMain />
      </div>
    </div>
  );
}
