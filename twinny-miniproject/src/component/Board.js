import React from "react";
import { Link } from "react-router-dom";
import { ContentDetail } from "../route";
import "../scss/Board.scss";

const Board = ({ data }) => {
  const { subject_id, subject, content, id, date } = data.content;
  return (
    <div id="board-wrapper">
      <div id="content-wrapper">
        {data.content.map((content) => {
          return (
            <Link to={`/content/${content.subject_id}`}>
              {content.subject_id}
            </Link>
          );
        })}
      </div>
      <div id="board-pagination-wrapper"></div>
    </div>
  );
};

export default Board;
