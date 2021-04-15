import { gql } from "@apollo/client";

export const ADD_COMMENT = gql`
  mutation AddComment($message: String!, $nickname: String!) {
    addComment(message: $message, nickname: $nickname) {
      message
      nickname
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation DeleteComment($id: Int!) {
    deleteComment(id: $id)
  }
`;
