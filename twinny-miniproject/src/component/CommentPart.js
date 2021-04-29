import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CommentBox, CreateComment, ModifyComment } from "../component";
import { useFunction, useClickedPage, useAxios, useModal } from "../hooks";
import "../scss/CommentPart.scss";

const CommentPart = ({ userId }) => {
  const { countCommentPageLength } = useFunction();
  const { clickedPage, handleClickedPage } = useClickedPage();
  const { axios_getCommentPagination } = useAxios();

  const { isModalOn, handleModal } = useModal(); // for modify Component
  const [comment_id, setComment_id] = useState(0);

  const subejct_id = useParams().id;

  const [contentComments, setContentComments] = useState({
    comments: [],
    count: 0,
  });

  const { comments, count } = contentComments; // state 비구조화 할당

  const commentPages = countCommentPageLength(count); // comment의 전체 값

  useEffect(() => {
    axios_getCommentPagination(subejct_id, clickedPage, setContentComments);
  }, [subejct_id, clickedPage, axios_getCommentPagination]);

  return (
    <div id="comments-wrapper">
      <div id="comment-main-wrapper">
        {count === 0 ? (
          <li id="no-comments">
            <p>댓글이 없습니다.</p>
            <p>첫번째 댓글을 작성해보세요!</p>
          </li>
        ) : (
          <CommentBox
            userId={userId}
            comments={comments}
            setContentComments={setContentComments}
            clickedPage={clickedPage}
            handleModal={handleModal}
            setComment_id={setComment_id}
          />
        )}
        {isModalOn ? (
          <ModifyComment
            comment_id={comment_id}
            setContentComments={setContentComments}
            clickedPage={clickedPage}
            handleModal={handleModal}
          />
        ) : (
          <CreateComment
            setContentComments={setContentComments}
            clickedPage={clickedPage}
            userId={userId}
          />
        )}
      </div>
      <ul id="comment-pagination-wrapper">
        <li className="FL-pagination" onClick={() => handleClickedPage(1)}>
          &#60; First
        </li>
        {commentPages.map((page) => {
          return (
            <li
              id={page === clickedPage ? "clickedColor" : null}
              key={page}
              value={page}
              onClick={() => handleClickedPage(page)}
            >
              {page}
            </li>
          );
        })}
        <li
          className="FL-pagination"
          onClick={() =>
            handleClickedPage(commentPages[commentPages.length - 1])
          }
        >
          Last &#62;
        </li>
      </ul>
    </div>
  );
};

export default CommentPart;
