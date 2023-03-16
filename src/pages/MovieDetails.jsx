import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { get } from "../data/httpClient";
import GetMovieImage from "../utils/GetMovieImage";
import '../stylesheets/MovieDetails.css'

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [genres, setgenres] = useState([]);

  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setgenres(data.genres[0]);
      console.log(data);
    });
  }, [movieId]);

  const imageUrl = GetMovieImage(movie.poster_path, 500);

  return (
    <div className="details-container">
      <img src={imageUrl} alt={movie.title} className='movie-image'/>
      <div className="col movie-details">
        <p className="title">
          <strong>Title: </strong>
          {movie.title}
        </p>
        <p>
          <strong>Genre: </strong>
          {genres.name}
        </p>
        <p><strong>Overview: </strong>{movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieDetails;
