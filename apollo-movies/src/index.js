import React from "react";
import ReactDOM from "react-dom";

import App from "./component/App";
import client from "./apollo";

import { ApolloProvider } from "@apollo/client/react";
import "normalize.css";

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
