import React from "react";
import { MovieDetail, Navbar } from "../components";

export default function MovieDetails({
  searchVal,
  setSearchVal,
  movieDetail,
  setMovieId,
}) {
  return (
    <>
      <Navbar searchVal={searchVal} setSearchVal={setSearchVal} />
      <MovieDetail movieDetail={movieDetail} setMovieId={setMovieId} />
    </>
  );
}
