import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useClickedPage, useAxios, useFunction } from "../hooks";
import "../scss/Board.scss";

const Board = () => {
  const { axios_getContentPagination } = useAxios();
  const { countBoardPageLength } = useFunction();
  const { clickedPage, handleClickedPage } = useClickedPage();

  const [boardContent, setBoardContent] = useState({
    content: [],
    count: 0,
  });
  const { content, count } = boardContent; // state 비구조화 할당

  const boardPages = countBoardPageLength(count); // page의 전체 값

  useEffect(() => {
    axios_getContentPagination(clickedPage, setBoardContent);
  }, [clickedPage, axios_getContentPagination]);

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
          {content.map((el) => {
            const refineDate = el.date.slice(0, 10); // timestamp 형식에서 필요한 값만 정제
            return (
              <Link
                key={el.subject_id}
                className="tr-link"
                to={`/content/${el.subject_id}`}
              >
                <li className="board-tr">
                  <div id="board-num" className="board-td">
                    {el.subject_id}
                  </div>
                  <div id="board-subject" className="board-td">
                    {el.subject}
                  </div>
                  <div id="board-writer" className="board-td">
                    {el.id}
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
          onClick={() => handleClickedPage(boardPages[boardPages.length - 1])}
        >
          Last &#62;
        </li>
      </ul>
    </div>
  );
};

export default Board;
