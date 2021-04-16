import React, { useState } from "react";
import "./App.scss";

function App() {
  const [state, setState] = useState({
    // ? DB에 있는 data들
    datas: [
      "게시글 1",
      "게시글 2",
      "게시글 3",
      "게시글 4",
      "게시글 5",
      "게시글 6",
      "게시글 7",
      "게시글 8",
      "게시글 9",
      "게시글 10",
      "게시글 11",
    ],
    currentPage: 1, // ? 현재 페이지. click에 따라 변경되는
    datasPerPage: 4, // ? 한 페이지당 보여줄 data의 수
  });

  const handleClickPage = (event) => {
    setState({
      ...state,
      currentPage: event.target.id,
    });
  };

  const { datas, currentPage, datasPerPage } = state; // ? state 비구조화 할당

  // ! data를 display하기 위한 logic
  const indexOfLastData = currentPage * datasPerPage; // ? 현재페이지 마지막 data = 현재페이지 * 페이지당 data 수
  const indexOfFirstData = indexOfLastData - datasPerPage; // ? 현재페이지 첫 data = 마지막data index - 페이지당 data 수
  const currentDatas = datas.slice(indexOfFirstData, indexOfLastData); // ? 현재페이지 data들 = 전체 data에서 index로 slice

  const renderDatas = currentDatas.map((todo, index) => {
    return <li key={index}>{todo}</li>;
  });

  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(datas.length / datasPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <li key={number} id={number} onClick={handleClickPage}>
        {number}
      </li>
    );
  });

  return (
    <div className="App">
      <ul id="todoList">{renderDatas}</ul>
      <ul id="pageNumbers">{renderPageNumbers}</ul>
    </div>
  );
}

export default App;
