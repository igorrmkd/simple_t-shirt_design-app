import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {ColorContextProvider} from "./components/colorContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
  <ColorContextProvider>
    <App />
  </ColorContextProvider>
  </React.StrictMode>,
  rootElement
);
