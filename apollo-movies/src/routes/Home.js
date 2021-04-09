import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  console.log(loading, error, data);

  if (loading) {
    return "loading...";
  }
  if (data && data.movies) {
    return data.movies.map((movie) => <h1 key={movie.id}>{movie.id}</h1>);
  }

  return <div>Home</div>;
};

export default Home;
