import React from "react";
import { Suggestions, Comments } from "../component";
import { handleGenres } from "../Function";
import "../scss/MovieDetails.scss";

const MovieDetails = ({ specificMovie, suggestions, comments }) => {
  const {
    medium_cover_image,
    title,
    rating,
    language,
    genres,
    description_intro,
  } = specificMovie;

  const refinedGenres = handleGenres(genres);

  return (
    <div>
      <div id="MD-container">
        <div id="MD-info-container">
          <img id="MD-info-img" alt={title} src={medium_cover_image} />
          <div id="MD-info-script">
            <div id="MD-info-title">Title: {title}</div>
            <div id="MD-info-rating">Rating: {rating} / 10</div>
            <div id="MD-info-language">Language: {language}</div>
            <div id="MD-info-genres">
              Genres:{" "}
              {refinedGenres.map((genre) => (
                <span>{genre}</span>
              ))}
            </div>
          </div>
        </div>
        <div id="MD-description">{description_intro}</div>
      </div>
      <Comments comments={comments} />
      <Suggestions suggestions={suggestions} />
    </div>
  );
};

export default MovieDetails;
