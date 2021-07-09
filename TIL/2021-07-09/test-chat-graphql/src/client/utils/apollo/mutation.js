import { gql } from '@apollo/client';

export const writeChat = gql`
  mutation write($writer: String!, $description: String!) {
    write(writer: $writer, description: $description)
  }
`;
