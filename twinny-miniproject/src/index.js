import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import App from "./App";
import "normalize.css";
import "./scss/index.scss";


axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

ReactDOM.render(<App />, document.getElementById("root"));
