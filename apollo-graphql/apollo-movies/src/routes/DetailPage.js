import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Loading, MovieDetails } from "../component";
import { GET_SPECIFIC_MOVIE_WITH_SUGGESTIONS_AND_COMMENTS } from "../apollo/query";

const Detail = () => {
  const { id } = useParams();

  const { loading, error, data, refetch } = useQuery(
    GET_SPECIFIC_MOVIE_WITH_SUGGESTIONS_AND_COMMENTS,
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
            refetch={refetch}
            specificMovie={data.movie}
            suggestions={data.suggestions}
            comments={data.comments}
          />
        )}
      </div>
    </div>
  );
};

export default Detail;
