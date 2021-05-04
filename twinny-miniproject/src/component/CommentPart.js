import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  CommentBox,
  CreateComment,
  ModifyComment,
  Loading,
} from "../component";
import { useFunction, useAxios, useModal } from "../hooks";
import "../scss/CommentPart.scss";

const CommentPart = ({ commentClickedPage, handleCommentClickedPage }) => {
  const { countCommentPageLength } = useFunction();
  const { axios_getCommentPagination } = useAxios();

  const { isModalOn, handleModal } = useModal(); // for modify Component
  const [comment_id, setComment_id] = useState(0);

  const subejct_id = useParams().id;

  const [contentComments, setContentComments] = useState({
    comments: [],
    count: 0,
  });

  const { comments, count } = contentComments; // state 비구조화 할당
  const [isLoading, setIsLoading] = useState(false);

  const commentPages = countCommentPageLength(count); // comment의 전체 값

  useEffect(() => {
    axios_getCommentPagination(
      subejct_id,
      commentClickedPage,
      setContentComments,
      setIsLoading
    );
  }, [subejct_id, commentClickedPage, axios_getCommentPagination]);

  return (
    <div id="comments-wrapper">
      <div id="comment-main-wrapper">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {count === 0 ? (
              <li id="no-comments">
                <p>댓글이 없습니다.</p>
                <p>첫번째 댓글을 작성해보세요!</p>
              </li>
            ) : (
              <CommentBox
                comments={comments}
                setContentComments={setContentComments}
                commentClickedPage={commentClickedPage}
                handleModal={handleModal}
                setComment_id={setComment_id}
              />
            )}
          </>
        )}

        {/* 댓글 작성부분 */}
        {isModalOn ? (
          <ModifyComment
            comment_id={comment_id}
            setContentComments={setContentComments}
            commentClickedPage={commentClickedPage}
            handleModal={handleModal}
          />
        ) : (
          <CreateComment
            setContentComments={setContentComments}
            commentClickedPage={commentClickedPage}
          />
        )}
      </div>
      {count ? (
        <ul id="comment-pagination-wrapper">
          <li
            className="FL-pagination"
            onClick={() => handleCommentClickedPage(1)}
          >
            &#60; First
          </li>
          {commentPages.map((page) => {
            return (
              <li
                id={page === commentClickedPage ? "clickedColor" : null}
                key={page}
                value={page}
                onClick={() => handleCommentClickedPage(page)}
              >
                {page}
              </li>
            );
          })}
          <li
            className="FL-pagination"
            onClick={() =>
              handleCommentClickedPage(commentPages[commentPages.length - 1])
            }
          >
            Last &#62;
          </li>
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CommentPart;
