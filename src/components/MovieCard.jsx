import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/MovieCard.css";

function MovieCard({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className="movie-card">
      <Link to={"/movies/" + movie.id}>
        <img
          width={230}
          height={345}
          src={imageUrl}
          alt={movie.title}
          className="movie-image"
        />
      </Link>
        <div>{movie.title}</div>
    </li>
  );
}

export default MovieCard;
