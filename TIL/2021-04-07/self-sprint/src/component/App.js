import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";

import Ui from "./Ui/Ui";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Ui />
      </div>
    </BrowserRouter>
  );
}

export default App;
