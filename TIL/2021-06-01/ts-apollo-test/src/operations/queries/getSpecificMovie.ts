import { gql } from '@apollo/client';

export interface GetSpecificMovie {
  title: string;
  rating: number;
  description_intro: string;
  language: string;
  medium_cover_image: string;
  genres: string[];
}

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
