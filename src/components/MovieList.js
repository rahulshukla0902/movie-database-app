import { Link } from "react-router-dom";
import "../styles/HomePage.css";

export default function MovieList({ movieList }) {
  if (!movieList.Search) {
    return (
      <div className="empty-movie-list">
        <span>Search a Movie to start</span>
      </div>
    );
  }
  return (
    <div className="movie-list">
      {movieList &&
        movieList.Search &&
        movieList.Search.map((movie, key) => (
          <Link to={`movie-details/${movie.imdbID}`} className="link-reset">
            <div className="movie-list-item">
              <img
                className="movie-list-item-icon"
                src={movie.Poster}
                alt="movie-image"
                height={"250px"}
                width={"250px"}
              />
              <p>{movie.Title}</p>
              <p>{movie.Year}</p>
            </div>
          </Link>
        ))}
    </div>
  );
}
