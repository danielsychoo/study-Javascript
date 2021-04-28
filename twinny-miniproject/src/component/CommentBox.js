import React from "react";
import "../scss/CommentBox.scss";

const CommentBox = ({ userId, comments }) => {
  return (
    <ul id="comment-box-wrapper">
      {comments.map((el) => {
        const refineDate = el.date.slice(0, 10);
        const currentUserId = userId;

        return (
          <li className="comment-list">
            <div className="comment-box-firstLine">
              <div className="comment-info">
                <p className="comment-id">{el.id}</p>
                <p className="comment-date">{refineDate}</p>
              </div>
              <div className="comment-btn-box">
                <button className="comment-modify-btn">수정</button>
                <button className="comment-delete-btn">삭제</button>
              </div>
            </div>
            <div className="comment-main-comment">{el.comment}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default CommentBox;
