import React from "react";
import { NewComment, CommentList } from "../component";
import "../scss/Comment.scss";

const Comments = ({ comments }) => {
  return (
    <div>
      <div id="SG-header">한줄 평 남기기</div>
      {comments.map((comment) => (
        <CommentList key={comment.id} comment={comment} />
      ))}
      <NewComment />
    </div>
  );
};

export default Comments;
