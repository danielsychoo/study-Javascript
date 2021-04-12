import React from "react";
import { Link } from "react-router-dom";
import "../scss/Home.scss";
import { useQuery, gql } from "@apollo/client";
import { isTitleLong } from "../Function";

const GET_MOVIES = gql`
  {
    movies {
      id
      title
      rating
      medium_cover_image
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);

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
            let resizeTitle = isTitleLong(movie.title);

            return (
              <li key={movie.id}>
                <Link to={`/${movie.id}`} className="home-movie">
                  <img alt={movie.title} src={movie.medium_cover_image} />
                  <div>{resizeTitle}</div>
                  <div>Rating: {movie.rating} / 10</div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Home;
