import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "normalize.css";
import App from "./App";
import { CookiesProvider } from "react-cookie";

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

ReactDOM.render(
  <CookiesProvider>
    <App />
  </CookiesProvider>,
  document.getElementById("root")
);
