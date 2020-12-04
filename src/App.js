import "./App.css";
import React from "react";
import BaseShirt from "./components/BaseShirt";
import Canvas from "./components/Canvas";

export default function App() {
  return (
    <div className="App">
      <h1>Simple t-shirt designer with FabricJS and ReactJS</h1>
      <Canvas />
      <BaseShirt />
    </div>
  );
}
