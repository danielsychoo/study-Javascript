import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Home,
  ContentDetail,
  CreateContent,
  Join,
  Redirect,
  NotFound,
} from "./route";
import { CookiesProvider } from "react-cookie";

function App() {
  return (
    <div className="App">
      <CookiesProvider>
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
      </CookiesProvider>
    </div>
  );
}

export default App;
