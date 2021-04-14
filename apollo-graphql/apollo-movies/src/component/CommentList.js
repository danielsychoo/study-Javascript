import React from "react";
import "../scss/CommentList.scss";

const CommentList = ({ comment }) => {
  const { nickname, message, date } = comment;
  return (
    <div id="CL-Wrapper">
      <div id="CL-nameDate-Box">
        <div>{nickname}</div>
        <div>{date}</div>
      </div>
      <div>{message}</div>
    </div>
  );
};

export default CommentList;
