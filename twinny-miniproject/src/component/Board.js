import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useClickedPage } from "../hooks";
import { countPageLength } from "../function";
import "../scss/Board.scss";
import axios from "axios";
import qs from "qs";

const Board = () => {
  const [boardContent, setBoardContent] = useState({
    content: [],
    currentPage: 1,
    count: 0,
  });
  const { content, currentPage, count } = boardContent; // state 비구조화 할당
  const { clickedPage, handleClickedPage } = useClickedPage(); // user가 click한 값으로 바꿈
  const boardPages = countPageLength(count); // page의 전체 값

  useEffect(() => {
    axios
      .post(
        "http://192.168.0.218:8080/read/pagination",
        qs.stringify({ page: clickedPage, limit: "10" })
      )
      .then((res) => {
        setBoardContent({
          content: res.data.items,
          currentPage: clickedPage,
          count: res.data.total_count,
        });
      })
      .catch((err) => console.log(err));
  }, [clickedPage]);
  console.log(currentPage);

  return (
    <div id="board-wrapper">
      <div id="content-wrapper">
        <ul id="board-table">
          <li className="subject-board-tr">
            <div id="subject-board-num" className="board-td">
              번호
            </div>
            <div id="subject-board-subject" className="board-td">
              제목
            </div>
            <div id="subject-board-writer" className="board-td">
              글쓴이
            </div>
            <div id="subject-board-date" className="board-td">
              날짜
            </div>
          </li>
          {content.map((content) => {
            const refineDate = content.date.slice(0, 10); // timestamp 형식에서 필요한 값만 정제
            return (
              <Link
                key={content.subject_id}
                className="tr-link"
                to={`/content/${content.subject_id}`}
              >
                <li className="board-tr">
                  <div id="board-num" className="board-td">
                    {content.subject_id}
                  </div>
                  <div id="board-subject" className="board-td">
                    {content.subject}
                  </div>
                  <div id="board-writer" className="board-td">
                    {content.id}
                  </div>
                  <div id="board-date" className="board-td">
                    {refineDate}
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <ul id="board-pagination-wrapper">
        <li className="FL-pagination" onClick={() => handleClickedPage(1)}>
          &#60; First
        </li>
        {boardPages.map((page) => {
          return (
            <li key={page} value={page} onClick={() => handleClickedPage(page)}>
              {page}
            </li>
          );
        })}
        <li
          className="FL-pagination"
          onClick={() => handleClickedPage(boardPages[boardPages.length - 1])}
        >
          Last &#62;
        </li>
      </ul>
    </div>
  );
};

export default Board;