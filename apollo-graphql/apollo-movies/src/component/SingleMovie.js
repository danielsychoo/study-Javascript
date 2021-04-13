import React from "react";
import { Link } from "react-router-dom";
import { isTitleLong } from "../Function";
import "../scss/SingleMovie.scss";

const SingleMovie = ({ movie }) => {
  const resizeTitle = isTitleLong(movie.title);

  return (
    <li key={movie.id}>
      <Link to={`/movie-details/${movie.id}`} className="home-movie">
        <img alt={movie.title} src={movie.medium_cover_image} />
        <div>{resizeTitle}</div>
        <div>Rating: {movie.rating} / 10</div>
      </Link>
    </li>
  );
};

export default SingleMovie;
