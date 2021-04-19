import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "normalize.css";
import App from "./App";

axios.defaults.baseURL = "https://192.168.0.218:8080";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

ReactDOM.render(<App />, document.getElementById("root"));
