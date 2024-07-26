import React, { useRef } from "react";
import "../styles/HomePage.css";

export default function Navbar({ searchVal, setSearchVal }) {
  const inputVal = useRef();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setSearchVal(inputVal.current.value);
    }
  };

  return (
    <div className="navbar">
      <span className="navbar-title">Movies Database App</span>
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search your Movie here"
          ref={inputVal}
          onKeyDown={(e) => handleSearch(e)}
        />
        <button
          className="search-icon-button"
          onClick={() => setSearchVal(inputVal.current.value)}
        >
          <span className="search-icon">&#128269;</span>
        </button>
      </div>
    </div>
  );
}
