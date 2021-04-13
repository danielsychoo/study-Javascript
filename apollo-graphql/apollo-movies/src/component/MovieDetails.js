import React from "react";
import { Suggestions } from "../component";
import "../scss/MovieDetails.scss";

const MovieDetails = ({ specificMovie, suggestions }) => {
  const {
    medium_cover_image,
    title,
    rating,
    language,
    genres,
    description_intro,
  } = specificMovie;

  // genres 사용할 수 있게 가공
  let lastGenre = genres.slice(-1);
  const genresExceptLastGenre = genres.slice(0, genres.length - 1);
  const handleTempGenres = genresExceptLastGenre.map((genre) => `${genre},`);
  const handleGenres = handleTempGenres.concat(lastGenre);
  console.log(handleGenres);

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
              {handleGenres.map((genre) => (
                <span>{genre}</span>
              ))}
            </div>
          </div>
        </div>
        <div id="MD-description">{description_intro}</div>
      </div>
      <Suggestions suggestions={suggestions} />
    </div>
  );
};

export default MovieDetails;
