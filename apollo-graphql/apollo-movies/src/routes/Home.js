import React from "react";
import "../scss/Home.scss";
import { SingleMovie, Loading } from "../component";

const Home = ({ loading, error, data }) => {
  if (error) {
    console.log(error);
  }

  return (
    <div>
      <header>MovieInfo with ApolloClient - GraphQL</header>
      {loading ? (
        <Loading />
      ) : (
        <ul id="home-container">
          {data.movies.map((movie) => {
            return <SingleMovie key={movie.id} movie={movie} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default Home;
