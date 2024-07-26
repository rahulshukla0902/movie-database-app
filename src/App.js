import "./App.css";
// import { Navbar, MovieList, MovieDetail } from './components';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [searchVal, setSearchVal] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [movieId, setMovieId] = useState("");
  const [movieDetail, setMovieDetail] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const API_URL = "http://www.omdbapi.com/";
  // ? i = tt3896198 & apikey=26aa1c83"

  useEffect(() => {
    const fetchData = async () => {
      if (searchVal !== "") {
        setisLoading(true);
        try {
          let response = await axios.get(
            API_URL + "?s=" + searchVal + "&apikey=26aa1c83"
          );
          setMovieList(response.data);
        } finally {
          setisLoading(false);
        }
      }
    };

    fetchData();
  }, [searchVal]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (movieId !== "") {
        setisLoading(true);
        try {
          let response = await axios.get(
            API_URL + "?i=" + movieId + "&apikey=26aa1c83"
          );
          setMovieDetail(response.data);
        } finally {
          setisLoading(false);
        }
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return isLoading ? (
    <div class="overlay">
      <div class="loader"></div>
      <span className="loader-text">Loading...</span>
    </div>
  ) : (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                searchVal={searchVal}
                setSearchVal={setSearchVal}
                movieList={movieList}
              />
            }
          />
          <Route
            path="/movie-details/:id"
            element={
              <MovieDetails
                searchVal={searchVal}
                setSearchVal={setSearchVal}
                movieDetail={movieDetail}
                setMovieId={setMovieId}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
