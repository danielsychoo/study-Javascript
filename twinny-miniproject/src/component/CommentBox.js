import React from "react";
import { useAxios, useFunction } from "../hooks";
import "../scss/CommentBox.scss";

const CommentBox = ({ userId, comments, setContentComments, clickedPage }) => {
  const { axios_deleteComment } = useAxios();
  const { checkUserIsWriter } = useFunction();

  return (
    <ul id="comment-box-wrapper">
      {comments.map((el) => {
        const { comment, id, comment_id, subject_id } = el;
        const refineDate = el.date.slice(0, 10);

        return (
          <li className="comment-list" key={comment_id}>
            <div className="comment-box-firstLine">
              <div className="comment-info">
                <p className="comment-id">{id}</p>
                <p className="comment-date">{refineDate}</p>
              </div>
              <div className="comment-btn-box">
                <button className="comment-modify-btn">수정</button>
                <button
                  className="comment-delete-btn"
                  onClick={() => {
                    axios_deleteComment(
                      userId,
                      id,
                      comment_id,
                      subject_id,
                      clickedPage,
                      setContentComments
                    );
                  }}
                >
                  삭제
                </button>
              </div>
            </div>
            <div className="comment-main-comment">{comment}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default CommentBox;
