import React from "react";
import "../scss/CommentList.scss";

const CommentList = ({ comment }) => {
  console.log(comment);
  const { nickname, message } = comment;
  return (
    <div id="CL-Wrapper">
      <div>{nickname}</div>
      <div>{message}</div>
    </div>
  );
};

export default CommentList;
