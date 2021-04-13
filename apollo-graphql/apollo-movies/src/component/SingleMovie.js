import React from "react";
import { Link } from "react-router-dom";
import { isTitleLong } from "../Function";
import "../scss/SingleMovie.scss";

const SingleMovie = ({ movie }) => {
  const { id, title, medium_cover_image, rating } = movie;
  const resizeTitle = isTitleLong(title);

  return (
    <li key={movie.id}>
      <Link to={`/movie-details/${id}`} className="home-movie">
        <img alt={title} src={medium_cover_image} />
        <div>{resizeTitle}</div>
        <div>Rating: {rating} / 10</div>
      </Link>
    </li>
  );
};

export default SingleMovie;
