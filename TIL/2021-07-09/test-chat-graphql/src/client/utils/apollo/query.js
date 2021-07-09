import { gql } from '@apollo/client';

export const getChatting = gql`
  query {
    chatting {
      id
      writer
      description
    }
  }
`;
