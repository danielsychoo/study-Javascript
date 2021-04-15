import React from "react";
import { NewComment, CommentList } from "../component";
import "../scss/Comment.scss";

const Comments = ({ comments, refetch }) => {
  return (
    <div>
      <div id="SG-header">한줄 평 남기기</div>
      {comments.map((comment) => (
        <CommentList key={comment.id} comment={comment} refetch={refetch} />
      ))}
      <NewComment refetch={refetch} />
    </div>
  );
};

export default Comments;
