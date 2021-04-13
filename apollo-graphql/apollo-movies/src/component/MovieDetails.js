import React from "react";
import { Suggestions } from "../component";
import "../scss/MovieDetails.scss";

const MovieDetails = ({ specificMovie }) => {
  console.log(specificMovie.movie);
  return (
    <div>
      <div id="MD-container">This is movieDetails container</div>
      <Suggestions />
    </div>
  );
};

export default MovieDetails;
