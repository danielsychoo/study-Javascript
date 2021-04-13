import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Loading, MovieDetails } from "../component";
import { GET_SPECIFIC_MOVIE_WITH_SUGGESTIONS } from "../apollo/query";

const Detail = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(
    GET_SPECIFIC_MOVIE_WITH_SUGGESTIONS,
    {
      variables: { id: parseInt(id) },
    }
  );

  if (error) console.log(error);

  return (
    <div>
      <header>MovieInfo with ApolloClient - GraphQL</header>
      <div>
        {loading ? (
          <Loading />
        ) : (
          <MovieDetails
            specificMovie={data.movie}
            suggestions={data.suggestions}
          />
        )}
      </div>
    </div>
  );
};

export default Detail;
