import React from "react";
import { Route } from "react-router-dom";
import { Home } from "../pages";
import "../scss/App.scss";

function App() {
  return (
    <div className="App">
      <Home />
      <Route exact path="/" component={Home} />
    </div>
  );
}

export default App;
