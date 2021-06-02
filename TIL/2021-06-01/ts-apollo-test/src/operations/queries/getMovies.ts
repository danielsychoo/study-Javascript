import { gql } from '@apollo/client';

interface Movie {
  id: number;
  title: string;
  rating: number;
  medium_cover_image: string;
}

export interface GetMovies {
  movies: Movie[];
}

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
