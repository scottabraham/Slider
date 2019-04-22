import React from "react";
import ReactDOM from "react-dom";
import Slider from "./Slider";

import "./styles.css";

function App() {
  return <Slider min={0} max={100} step={1} />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
