import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, DetailPage, NotFound } from "./routes";
import { GET_MOVIES } from "./apollo/query";
import { useQuery } from "@apollo/client";

import "normalize.css";

function App() {
  const { loading, error, data } = useQuery(GET_MOVIES);

  console.log(data.movies)

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home loading={loading} error={error} data={data} />}
          />
          <Route path="/movie-details/:id" render={() => <DetailPage />} />
          <Route path="*" render={() => <NotFound />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
