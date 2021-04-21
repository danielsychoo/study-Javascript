import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Home,
  ContentDetail,
  CreateContent,
  Join,
  Redirect,
  NotFound,
} from "./route";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/join" render={() => <Join />} />
            <Route path="/content/:id" render={() => <ContentDetail />} />
            <Route path="/createcontent" render={() => <CreateContent />} />
            <Route path="/redirect" render={() => <Redirect />} />
            <Route path="*" render={() => <NotFound />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
