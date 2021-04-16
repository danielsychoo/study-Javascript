import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, ContentDetail, CreateContent, Join, NotFound } from "./route";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/join" render={() => <Join />} />
          <Route path="/content/:id" render={() => <ContentDetail />} />
          <Route path="/createcontent" render={() => <CreateContent />} />
          <Route path="*" render={() => <NotFound />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
