import React from "react";
import { useMutation } from "@apollo/client";
import { DELETE_COMMENT } from "../apollo/mutation";
import "../scss/CommentList.scss";

const CommentList = ({ comment, refetch }) => {
  console.log(comment);
  const { nickname, message, date, id } = comment;

  const [deleteComment] = useMutation(DELETE_COMMENT);
  const handleDelete = () => {
    deleteComment({ variables: { id: parseInt(id) } })
      .then(() => {
        refetch();
      })
      .catch((err) => console.log(err));
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
