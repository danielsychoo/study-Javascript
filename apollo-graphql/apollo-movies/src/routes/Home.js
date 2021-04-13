import React from "react";
import "../scss/Home.scss";
import { SingleMovie } from "../component";

const Home = ({ setClickedId, loading, error, data }) => {
  if (error) {
    console.log(error);
  }

  return (
    <div>
      <header>MovieInfo with ApolloClient - GraphQL</header>
      {loading ? (
        <div id="loading">Loading...</div>
      ) : (
        <ul id="home-container">
          {data.movies.map((movie) => {
            return (
              <SingleMovie
                key={movie.id}
                movie={movie}
                setClickedId={setClickedId}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Home;
