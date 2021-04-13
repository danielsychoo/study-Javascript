import React from "react";
import { SingleMovie } from "../component";
import "../scss/Suggestions.scss";

const Suggestions = ({ suggestions }) => {
  return (
    <div>
      <div id="SG-header">비슷한 영화정보 추천</div>
      <ul id="SG-container">
        {suggestions.map((movie) => {
          return <SingleMovie key={movie.id} movie={movie} />;
        })}
      </ul>
    </div>
  );
};

export default Suggestions;
