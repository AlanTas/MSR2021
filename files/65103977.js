import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

var bImg = prompt("Which image do you want to set as background image?");
const bStyle = {
  backgroundImage: `url(${bImg})` // i stored the link here
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div style={bStyle}>
    // I stored it here but still it won't show up
    <h1>Hello world!!</h1>
  </div>,
  rootElement
);

