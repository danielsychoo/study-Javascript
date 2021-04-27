import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CommentBox, CreateComment, ModifyComment } from "../component";
import { useFunction, useClickedPage, useAxios } from "../hooks";
import "../scss/CommentPart.scss";

const CommentPart = () => {
  const { countPageLength } = useFunction();
  const { clickedPage, handleClickedPage } = useClickedPage();
  const { axios_getCommentPagination } = useAxios();
  const params = useParams();
  // console.log(params.id);

  const [contentComments, setContentComments] = useState({
    comments: [],
    count: 0,
  });

  const { comments, count } = contentComments; // state 비구조화 할당
  console.log(comments);
  console.log(count);

  // ? const commentsPages = countPageLength(count); // page의 전체 값

  useEffect(() => {
    axios_getCommentPagination(params.id, clickedPage, setContentComments);
  }, [params.id, clickedPage, axios_getCommentPagination]);

  return (
    <div id="comments-wrapper">
      <div id="comment-main-wrapper">
        {count === 0 ? (
          <div id="no-comments">댓글이 없습니다.</div>
        ) : (
          <CommentBox />
        )}
        <div id="write-comment"></div>
      </div>
      <ul id="comment-pagination-wrapper">
        <li className="FL-pagination">&#60; First</li>
        <li>1</li>
        <li>2</li>
        <li className="FL-pagination">Last &#62;</li>
      </ul>
    </div>
  );
};

export default CommentPart;
