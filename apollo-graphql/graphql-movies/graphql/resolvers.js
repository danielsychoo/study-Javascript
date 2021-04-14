// schema.graphql에서 define한 query를 resolve하는 역할

import {
  getMovies,
  getMovie,
  getSuggestions,
  getComments,
  addComment,
  deleteComment,
} from "./db";

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getSuggestions(id),
    comments: () => getComments(),
  },
  Mutation: {
    addComment: (_, { nickname, message }) => addComment(nickname, message),
    deleteComment: (_, { id }) => deleteComment(id),
  },
};

export default resolvers;
