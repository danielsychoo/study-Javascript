import React from "react";
import { useMutation } from "@apollo/client";
import { DELETE_COMMENT } from "../apollo/mutation";
import "../scss/CommentList.scss";
import { GET_SPECIFIC_MOVIE_WITH_SUGGESTIONS_AND_COMMENTS } from "../apollo/query";

const CommentList = ({ comment }) => {
  const { nickname, message, date, id } = comment;

  const [deleteComment] = useMutation(DELETE_COMMENT, {
    refetchQueries: [{
      query: GET_SPECIFIC_MOVIE_WITH_SUGGESTIONS_AND_COMMENTS, 
      variables: { id: parseInt(id) },
    }]
  });

  const handleDelete = () => {
    deleteComment({ variables: { id: parseInt(id) } })
  };

  return (
    <div id="CL-Wrapper">
      <div id="CL-nameDate-Box">
        <div>{nickname}</div>
        <div>{date}</div>
      </div>
      <div id="CL-messageDel-Box">
        <div>{message}</div>
        <button onClick={handleDelete}>삭제</button>
      </div>
    </div>
  );
};

export default CommentList;
