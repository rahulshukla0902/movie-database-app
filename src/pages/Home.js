import React from "react";
import { Navbar, MovieList } from "../components";
import "../styles/HomePage.css";

function Home({ searchVal, setSearchVal, movieList }) {
  return (
    <div className="home">
      <Navbar searchVal={searchVal} setSearchVal={setSearchVal} />
      <MovieList movieList={movieList} />
    </div>
  );
}

export default Home;
