import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Loading, MovieDetails } from "../component";
import { GET_SPECIFIC_MOVIE } from "../apollo/query";

const Detail = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_SPECIFIC_MOVIE, {
    variables: { id: parseInt(id) },
  });

  if (error) return `Error! ${error}`;

  return (
    <div>
      <header>MovieInfo with ApolloClient - GraphQL</header>
      <div>{loading ? <Loading /> : <MovieDetails specificMovie={data} />}</div>
    </div>
  );
};

export default Detail;
