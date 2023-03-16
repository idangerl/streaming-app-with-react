import React, { useEffect, useState } from "react";
import { get } from "../data/httpClient";
import MovieCard from "./MovieCard";
import "../stylesheets/ContextMovieCard.css";

function ContextMovieCard() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
      console.log(data);
    });
  }, []);

  return (
    <ul className="container">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </ul>
  );
}

export default ContextMovieCard;
