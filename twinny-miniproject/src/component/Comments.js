import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFunction, useClickedPage, useAxios } from "../hooks";
import "../scss/Comments.scss";

const Comments = () => {
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
      {count === 0 ? (
        <div id="no-comments">댓글이 없습니다.</div>
      ) : (
        <div>Comments Component</div>
      )}
      <div id="comments-list"></div>
      <div id="write-comment"></div>
      <div id="comments-pagination"></div>
    </div>
  );
};

export default Comments;
