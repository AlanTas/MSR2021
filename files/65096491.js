import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color : "red"

}

const dStyle = {
  backgroundImage : "url(https://wallpapercave.com/wp/wp2771916.jpg)",
}

ReactDOM.render(
<div style = {dStyle}>
  <h1 style = {customStyle}>Hello World!
  </h1>
  </div>, document.getElementById("root"));
