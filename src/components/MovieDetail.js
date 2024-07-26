import React, { useEffect } from "react";
import { useParams } from "react-router";
import "../styles/MovieDetails.css";

export default function MovieDetail({ setMovieId, movieDetail }) {
  const { id } = useParams();
  useEffect(() => {
    setMovieId(id);
  }, [id]);

  return (
    <div className="movie-details">
      <button className="back-button" onClick={() => window.history.back()}>
        &#9664; Go Back
      </button>
      <h1>{movieDetail.Title}</h1>
      <img
        src={movieDetail.Poster}
        alt="movie-image"
        height={"500px"}
        width={"500px"}
      />
      <p>
        <strong>Director : </strong>
        {movieDetail.Director}
      </p>
      <p>
        <strong>Writer : </strong>
        {movieDetail.Writer}
      </p>
      <p>
        <strong>Actors : </strong>
        {movieDetail.Actors}
      </p>
      <p>
        <strong>Genre : </strong>
        {movieDetail.Genre}
      </p>
      <p>
        <strong>Country : </strong>
        {movieDetail.Country}
      </p>
      <p>
        <strong>Language : </strong>
        {movieDetail.Language}
      </p>
      <p>
        <strong>Awards : </strong>
        {movieDetail.Awards}
      </p>
      <p>
        <strong>Released : </strong>
        {movieDetail.Released}
      </p>
      <p>
        <strong>imdbRating : </strong>
        {movieDetail.imdbRating}
      </p>
      <p>
        <strong>Plot : </strong>
        {movieDetail.Plot}
      </p>
    </div>
  );
}
