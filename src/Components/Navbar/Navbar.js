import React from "react";
import "./Navbar.css";
import Requests from "../../Helpers/Requests";

function Navbar({setSelectedOption}) {
  return (
    <div className="nav">
      <h2 onClick={() => setSelectedOption(Requests.fetchTrending)}>
        Trending
      </h2>
      <h2 onClick={() => setSelectedOption(Requests.fetchTopRated)}>
        Top Rated
      </h2>
      <h2 onClick={() => setSelectedOption(Requests.fetchActionMovies)}>
        Action
      </h2>
      <h2 onClick={() => setSelectedOption(Requests.fetchComedyMovies)}>
        Comedy
      </h2>
      <h2 onClick={() => setSelectedOption(Requests.fetchHorrorMovies)}>
        Horror
      </h2>
      <h2 onClick={() => setSelectedOption(Requests.fetchRomanceMovies)}>
        Romance
      </h2>
      <h2 onClick={() => setSelectedOption(Requests.fetchMystery)}>Mystery</h2>
      <h2 onClick={() => setSelectedOption(Requests.fetchSciFi)}>Sci-fi</h2>
      <h2 onClick={() => setSelectedOption(Requests.fetchWestern)}>Western</h2>
      <h2 onClick={() => setSelectedOption(Requests.fetchAnimation)}>
        Animation
      </h2>
      <h2 onClick={() => setSelectedOption(Requests.fetchTV)}>Movie</h2>
    </div>
  );
}

export default Navbar;
