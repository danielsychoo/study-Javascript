import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFunction, useClickedPage, useAxios } from "../hooks";
import "../scss/Comments.scss";

const Comments = () => {
  const { countPageLength } = useFunction();
  const { clickedPage, handleClickedPage } = useClickedPage();
  const { axios_getCommentPagination } = useAxios();
  const params = useParams();
  console.log(params.id);

  const [contentComments, setContentComments] = useState({
    comments: [],
    count: 0,
  });

  // ? const { comments, count } = contentComments; // state 비구조화 할당

  // ? const commentsPages = countPageLength(count); // page의 전체 값

  useEffect(() => {
    axios_getCommentPagination(params.id, clickedPage, setContentComments);
  }, [params.id, clickedPage, axios_getCommentPagination]);

  console.log(contentComments);

  return <div id="comments-wrapper">Comments Component</div>;
};

export default Comments;
