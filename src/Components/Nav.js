import React from "react";
import "./Nav.css";
import { requests } from "./requests";
function Nav({ setSelectedOption }) {
  return (
    <div className="nav">
      <h2 onClick={() => setSelectedOption(requests.fetchTopAiring)}>
        Top Airing
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchUpcoming)}>
        Top Upcoming
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchPopular)}>
        Most Popular
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchTv)}>TV</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchMovie)}>Movie</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchOva)}>OVA</h2>
    </div>
  );
}

export default Nav;
