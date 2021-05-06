import React from "react";
import { useAxios } from "../hooks";
import "../scss/CommentBox.scss";

const CommentBox = ({
  comments,
  setContentComments,
  commentClickedPage,
  handleModal,
  setComment_id,
  setIsLoading,
}) => {
  const { axios_checkModifyComment, axios_deleteComment } = useAxios();

  return (
    <ul id="comment-box-wrapper">
      {comments.map((el) => {
        const { comment, id, comment_id, subject_id } = el;
        const refineDate = el.date.slice(0, 10);

        return (
          <li className="comment-list" key={comment_id}>
            <div className="comment-box-left">
              <div className="comment-info">
                <p className="comment-id">{id}</p>
                <p className="comment-date">{refineDate}</p>
              </div>
              <pre className="comment-main-comment">{comment}</pre>
            </div>
            <div className="comment-btn-box">
              <button
                className="comment-modify-btn"
                onClick={() => {
                  axios_checkModifyComment(comment_id, handleModal);
                  setComment_id(comment_id);
                }}
              >
                수정
              </button>
              <button
                className="comment-delete-btn"
                onClick={() => {
                  axios_deleteComment(
                    comment_id,
                    subject_id,
                    commentClickedPage,
                    setContentComments,
                    setIsLoading
                  );
                }}
              >
                삭제
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default CommentBox;
