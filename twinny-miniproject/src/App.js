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
import { Navigation, Loading } from "./component";
import { useClickedPage } from "./hooks";

const App = () => {
  const { clickedPage, handleClickedPage } = useClickedPage();

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Loading />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                clickedPage={clickedPage}
                handleClickedPage={handleClickedPage}
              />
            )}
          />
          <Route path="/join" render={() => <Join />} />
          <Route exact path="/content/:id" render={() => <ContentDetail />} />
          <Route path="/createcontent" render={() => <CreateContent />} />
          <Route path="/redirect" render={() => <Redirect />} />
          {/* <Route
            path="/test"
            render={() => {
              <Loading />;
            }}
          /> */}
          <Route path="*" render={() => <NotFound />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
