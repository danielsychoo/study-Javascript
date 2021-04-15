import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignIn, SignUp, Home, NotFound } from "./routes";
import { Navigation } from "./component";
import "normalize.css";
import "./scss/App.scss";

function App() {
  return (
    <div className="App">
      <Navigation />
      <main id="main-wrapper">
        <Router>
          <Switch>
            <Route exact path="/" render={() => <SignIn />} />
            <Route path="/signup" render={() => <SignUp />} />
            <Route path="/home" render={() => <Home />} />
            <Route path="*" render={() => <NotFound />} />
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
