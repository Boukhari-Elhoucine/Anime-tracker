import instance from "../../Components/axios";
import axios from "axios";
export const addToList = (anime, status = "added") => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    const uid = getState().firebase.auth.uid;
    const id = anime.mal_id.toString();
    firestore
      .collection("users")
      .doc(uid)
      .collection("list")
      .doc(id)
      .set({
        anime_id: anime.mal_id,
        title: anime.title,
        episodes: anime.episodes,
        image: anime.image_url,
        score: anime.score,
        type: anime.type,
        date: anime.start_date,
        status: status,
      })
      .then(() => dispatch({ type: "ADD_TO_LIST" }))
      .catch((err) => dispatch("FAILED_TO_ADD"));
  };
};
export const getList = (selectedOption) => {
  return (dispatch, getState) => {
    dispatch({ type: "LOADING" });
    instance
      .get(selectedOption)
      .then((response) =>
        dispatch({ type: "GET_LIST", list: response.data.top })
      );
  };
};
export const searchAnime = (searchInput) => {
  return (dispatch, getState) => {
    dispatch({ type: "LOADING" });
    axios
      .get(
        `https://api.jikan.moe/v3/search/anime?q=${searchInput.replace(
          / /g,
          ""
        )}&page=1`
      )
      .then((response) =>
        dispatch({ type: "SEARCH_RESULT", payload: response.data.results })
      );
  };
};
export const deleteAnime = (anime) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    const uid = getState().firebase.auth.uid;
    const id = anime.anime_id.toString();
    firestore
      .collection("users")
      .doc(uid)
      .collection("list")
      .doc(id)
      .delete()
      .then((response) => dispatch({ type: "DELETE_ANIME" }))
      .catch((err) => dispatch({ type: "FAILED_DELETE" }));
  };
};
