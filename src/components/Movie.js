import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://st4.depositphotos.com/17828278/24401/v/600/depositphotos_244011872-stock-illustration-image-vector-symbol-missing-available.jpg";

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  const siteName = movie.Title;
  const site = `https://en.wikipedia.org/wiki/${siteName}`;
  return (
    <a href={site} rel="noreferrer" target="_blank" className="movie">
      <h2 className="movie-title">{movie.Title}</h2>
      <img
        width="200px"
        height="300px"
        alt={`The movie titled: ${movie.Title}`}
        src={poster}
      />
      <p className="movie-text">The film was released in {movie.Year} </p>
    </a>
  );
};

export default Movie;
