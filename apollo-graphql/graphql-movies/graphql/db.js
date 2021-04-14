import axios from "axios";
import { getDateWithFormat } from "./function";

const BASE_URL = "https://yts.mx/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(LIST_MOVIES_URL, {
    params: {
      limit,
      minimum_rating: rating,
    },
  });
  return movies;
};

export const getMovie = async (id) => {
  const {
    data: {
      data: { movie },
    },
  } = await axios(MOVIE_DETAILS_URL, {
    params: {
      movie_id: id,
    },
  });
  return movie;
};

export const getSuggestions = async (id) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(MOVIE_SUGGESTIONS_URL, {
    params: {
      movie_id: id,
    },
  });
  return movies;
};

// fake comments data
export let comments = [
  {
    id: 0,
    nickname: "testuser1",
    message: "First comment",
    date: "2021-04-11",
  },
  {
    id: 1,
    nickname: "testuser2",
    message: "Second comment",
    date: "2021-04-12",
  },
  {
    id: 2,
    nickname: "testuser1",
    message: "Third comment",
    date: "2021-04-13",
  },
];

export const getComments = () => comments;

export const addComment = (nickname, message) => {
  const newComment = {
    id: comments.length + 1,
    nickname,
    message,
    date: getDateWithFormat(),
  };
  comments.push(newComment);
  return newComment;
};

export const deleteComment = (id) => {
  const cleanedComments = comments.filter((comment) => comment.id !== id);
  if (comments.length > 0) {
    comments = cleanedComments;
    return "Delete complete";
  } else {
    return "No more comments";
  }
};
