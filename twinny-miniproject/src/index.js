import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "normalize.css";
import App from "./App";
import { CookiesProvider } from "react-cookie";

// axios.defaults.baseURL = "http://192.168.0.218:8080";
// axios.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded";

// axios.defaults.withCredentials = true;

ReactDOM.render(
  <CookiesProvider>
    <App />
  </CookiesProvider>,
  document.getElementById("root")
);
