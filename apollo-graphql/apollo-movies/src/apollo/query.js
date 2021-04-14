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

export const GET_SUGGESTIONS = gql`
  query getSuggestions($id: Int!) {
    suggestions(id: $id) {
      title
      rating
      medium_cover_image
    }
  }
`;

export const GET_SPECIFIC_MOVIE_WITH_SUGGESTIONS_AND_COMMENTS = gql`
  query getMovieWithSuggestionsAndComments($id: Int!) {
    movie(id: $id) {
      title
      rating
      description_intro
      language
      medium_cover_image
      genres
    }
    suggestions(id: $id) {
      id
      title
      rating
      medium_cover_image
    }
    comments {
      id
      nickname
      message
      date
    }
  }
`;
