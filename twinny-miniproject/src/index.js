import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "normalize.css";
import App from "./App";

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

ReactDOM.render(<App />, document.getElementById("root"));
