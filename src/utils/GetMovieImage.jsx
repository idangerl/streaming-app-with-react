import placeholder from "../img/placeholder.png";

function GetMovieImage(path, width) {
  return path ? `https://image.tmdb.org/t/p/w${width}${path}` : placeholder;
}

export default GetMovieImage;

//  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
