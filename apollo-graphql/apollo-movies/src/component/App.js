import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { Home, Detail } from "../routes";
import { useClickedId } from "../hooks";
import "normalize.css";

function App() {
  const [clickedId, setClickedId] = useClickedId(0);

  return (
    <div className="App">
      <Router>
        <Route
          exact
          path="/"
          render={() => <Home setClickedId={setClickedId} />}
        />
        <Route path="/:id" render={() => <Detail id={clickedId} />} />
      </Router>
    </div>
  );
}

export default App;
