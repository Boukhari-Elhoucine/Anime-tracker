import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, CircularProgress } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import "./AnimeList.css";
import Anime from "./Anime";
import { connect } from "react-redux";
import { getList, searchAnime } from "../../store/action/listAction";
function AnimeList({
  selectedOption,
  setSelectedOption,
  getAnimes,
  animes,
  search,
  loading,
}) {
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    if (selectedOption !== "") {
      getAnimes();
    }
  }, [selectedOption, getAnimes]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput.length >= 3) {
      search(searchInput);
      setSelectedOption("");
    }
  };
  return (
    <div className="animelist">
      <AppBar position="static">
        <Toolbar className="animelist__search">
          <form className="search" onSubmit={handleSubmit}>
            <SearchIcon color="primary" />
            <input
              type="text"
              placeholder="search Anime"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </form>
        </Toolbar>
      </AppBar>
      {!loading ? (
        <div className="animelist__posters">
          {animes?.map((anime) => (
            <Anime key={anime.mal_id} anime={anime} />
          ))}
        </div>
      ) : (
        <CircularProgress color="secondary" className="indicator" />
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    animes: state.animelist.animelist,
    loading: state.animelist.loading,
  };
};
const mapDispatchToProps = (dispatch, OwnProps) => {
  return {
    getAnimes: () => dispatch(getList(OwnProps.selectedOption)),
    search: (input) => dispatch(searchAnime(input)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AnimeList);
