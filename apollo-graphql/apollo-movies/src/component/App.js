import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { Home, Detail } from "../routes";
import "normalize.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/:id" component={Detail} />
      </Router>
    </div>
  );
}

export default App;
