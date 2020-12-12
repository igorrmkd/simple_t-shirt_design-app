import "./App.css";
import React from "react";
import BaseShirt from "./components/BaseShirt";
// import Canvas from "./components/Canvas";
import CanvasMain from "./components/CanvasMain";

export default function App() {
  return (
    <div className="App">
      <h2>Simple t-shirt designer with React</h2>
      <div className="fullView">
        <BaseShirt />
        <CanvasMain />
      </div>
    </div>
  );
}
