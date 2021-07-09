import { gql } from '@apollo/client';

export const newChat = gql`
  subscription {
    newChat {
      id
      writer
      description
    }
  }
`;
