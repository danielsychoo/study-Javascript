import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useAxios, useFunction, useSwal } from "../hooks";
import { Loading } from "../component";
import "../scss/Board.scss";

const Board = ({
  history,
  clickedPage,
  handleClickedPage,
  clickedDevidePage,
  handlePrevFirstPage,
  handleNextLastPage,
  handlePrevDevidePage,
  handleNextDevidePage,
}) => {
  const { axios_getContentPagination } = useAxios();
  const {
    countBoardPageLength,
    goToContentDetail,
    handleDevideFivePages,
  } = useFunction();
  const [isLoading, setIsLoading] = useState(false);

  const [boardContent, setBoardContent] = useState({
    content: [],
    count: 0,
  });
  const { content, count } = boardContent; // state 비구조화 할당
  const boardPages = countBoardPageLength(count); // page의 전체 값

  const devideLongPages = handleDevideFivePages(boardPages);

  const { swal_alertItsFirstPage, swal_alertItsLastPage } = useSwal();

  useEffect(() => {
    axios_getContentPagination(clickedPage, setBoardContent, setIsLoading);
  }, [clickedPage, handleClickedPage, axios_getContentPagination]);

  return (
    <div id="board-wrapper">
      <div id="content-wrapper">
        {isLoading ? (
          <div id="content-loading-wrapper">
            <Loading />
          </div>
        ) : (
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
                <div
                  key={el.subject_id}
                  className="tr-link"
                  onClick={() => goToContentDetail(el.subject_id, history)}
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
                </div>
              );
            })}
          </ul>
        )}
      </div>

      {/* pagination part */}
      {count ? (
        <ul className="board-pagination-wrapper">
          {boardPages.length < 5 ? (
            <>
              <li
                className="FL-pagination"
                onClick={() => handleClickedPage(1)}
              >
                &#60; First
              </li>
              <li
                className="FL-pagination"
                onClick={() =>
                  handleClickedPage(boardPages[boardPages.length - 1])
                }
              >
                Last &#62;
              </li>
            </>
          ) : (
            <>
              <li
                className="FL-pagination"
                onClick={() => {
                  handleClickedPage(1);
                  handlePrevFirstPage();
                }}
              >
                &#60;&#60; 처음
              </li>

              <li
                className="FL-pagination"
                onClick={
                  clickedDevidePage === 0
                    ? () => swal_alertItsFirstPage()
                    : () => {
                        handleClickedPage(
                          parseInt(devideLongPages[clickedDevidePage - 1])
                        );
                        handlePrevDevidePage();
                      }
                }
              >
                &#60; 이전
              </li>

              {devideLongPages[clickedDevidePage].map((page, index) => {
                return (
                  <li
                    key={index}
                    id={page === clickedPage ? "clickedColor" : null}
                    onClick={() => handleClickedPage(page)}
                  >
                    {page}
                  </li>
                );
              })}
              {clickedDevidePage === 2 ? (
                <></>
              ) : (
                <>
                  <span>...</span>
                  <li
                    key={boardPages[boardPages.length - 1]}
                    id={
                      boardPages[boardPages.length - 1] === clickedPage
                        ? "clickedColor"
                        : null
                    }
                    onClick={() =>
                      handleClickedPage(boardPages[boardPages.length - 1])
                    }
                  >
                    {boardPages[boardPages.length - 1]}
                  </li>
                </>
              )}

              <li
                className="FL-pagination"
                onClick={
                  clickedDevidePage === 2
                    ? () => swal_alertItsLastPage()
                    : () => {
                        handleClickedPage(
                          parseInt(devideLongPages[clickedDevidePage + 1])
                        );
                        handleNextDevidePage(devideLongPages.length - 1);
                      }
                }
              >
                다음 &#62;
              </li>

              <li
                className="FL-pagination"
                onClick={() => {
                  handleClickedPage(boardPages[boardPages.length - 1]);
                  handleNextLastPage(devideLongPages.length - 1);
                }}
              >
                맨뒤 &#62;&#62;
              </li>
            </>
          )}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

export default withRouter(Board);
