import { gql } from "@apollo/client";

export const ADD_COMMENT = gql`
  mutation AddComment($message: String!, $nickname: String!) {
    addComment(message: $message, nickname: $nickname) {
      message
      nickname
    }
  }
`;
