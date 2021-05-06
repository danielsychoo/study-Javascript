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
import { Navigation } from "./component";
import { useClickedPage } from "./hooks";

const App = () => {
  const {
    clickedPage,
    handleClickedPage,
    commentClickedPage,
    handleCommentClickedPage,
    clickedDevidePage,
    handlePrevFirstPage,
    handleNextLastPage,
    handlePrevDevidePage,
    handleNextDevidePage,
  } = useClickedPage();

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                clickedPage={clickedPage}
                handleClickedPage={handleClickedPage}
                clickedDevidePage={clickedDevidePage}
                handlePrevFirstPage={handlePrevFirstPage}
                handleNextLastPage={handleNextLastPage}
                handlePrevDevidePage={handlePrevDevidePage}
                handleNextDevidePage={handleNextDevidePage}
              />
            )}
          />
          <Route path="/join" render={() => <Join />} />
          <Route
            exact
            path="/content/:id"
            render={() => (
              <ContentDetail
                commentClickedPage={commentClickedPage}
                handleCommentClickedPage={handleCommentClickedPage}
                clickedDevidePage={clickedDevidePage}
                handlePrevFirstPage={handlePrevFirstPage}
                handleNextLastPage={handleNextLastPage}
                handlePrevDevidePage={handlePrevDevidePage}
                handleNextDevidePage={handleNextDevidePage}
              />
            )}
          />
          <Route path="/createcontent" render={() => <CreateContent />} />
          <Route path="/redirect" render={() => <Redirect />} />
          <Route path="*" render={() => <NotFound />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
