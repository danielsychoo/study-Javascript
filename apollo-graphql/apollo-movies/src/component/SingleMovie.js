import React from "react";
import { Link } from "react-router-dom";
import { isTitleLong } from "../Function";
import "../scss/SingleMovie.scss";

const SingleMovie = ({ movie, setClickedId }) => {
  const resizeTitle = isTitleLong(movie.title);

  return (
    <li key={movie.id} onClick={() => setClickedId(movie.id)}>
      <Link to={`/${movie.id}`} className="home-movie">
        <img alt={movie.title} src={movie.medium_cover_image} />
        <div>{resizeTitle}</div>
        <div>Rating: {movie.rating} / 10</div>
      </Link>
    </li>
  );
};

export default SingleMovie;
