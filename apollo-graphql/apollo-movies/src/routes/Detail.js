import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_SPECIFIC_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      title
      rating
      description_intro
      language
      medium_cover_image
      genres
    }
  }
`;

const Detail = ({ clickedId }) => {
  console.log(clickedId);
  const { loading, error, data } = useQuery(GET_SPECIFIC_MOVIE);

  return <h1>Detail</h1>;
};

export default Detail;
