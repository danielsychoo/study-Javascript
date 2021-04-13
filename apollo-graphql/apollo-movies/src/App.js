import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { Home, Detail } from "./routes";
import { useClickedId } from "./hooks";
import { useQuery, gql } from "@apollo/client";

import "normalize.css";

const GET_MOVIES = gql`
  query {
    movies {
      id
      title
      rating
      medium_cover_image
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_MOVIES);
  const [clickedId, setClickedId] = useClickedId(0);

  return (
    <div className="App">
      <Router>
        <Route
          exact
          path="/"
          render={() => (
            <Home
              loading={loading}
              error={error}
              data={data}
              setClickedId={setClickedId}
            />
          )}
        />
        <Route path="/:id" render={() => <Detail clickedId={clickedId} />} />
      </Router>
    </div>
  );
}

export default App;
