import { gql } from "@apollo/client";

export const GET_MOVIES = gql`
  query {
    movies {
      id
      title
      rating
      medium_cover_image
    }
  }
`;

export const GET_SPECIFIC_MOVIE = gql`
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
