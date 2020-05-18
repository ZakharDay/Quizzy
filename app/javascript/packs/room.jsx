import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import Lap from "../components/Lap";

function App() {
  return (
    <div className="App">
      <Lap />
    </div>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement("div"))
  );
});
