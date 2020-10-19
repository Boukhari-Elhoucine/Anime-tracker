import React from "react";
import "./Anime.css";
import { Fab, Tooltip, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { connect } from "react-redux";
import { addToList } from "../../store/action/listAction";
import TextTruncate from "react-text-truncate";
import { useHistory } from "react-router-dom";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import LiveTvSharpIcon from "@material-ui/icons/LiveTvSharp";
import CancelIcon from "@material-ui/icons/Cancel";
function Anime({ anime, addToList, auth }) {
  const history = useHistory();
  return (
    <div className="anime">
      <img src={anime.image_url} alt="" />
      <TextTruncate
        line={1}
        element="h2"
        truncateText="..."
        text={anime.title}
      />
      <p>{anime.type}</p>
      {anime.score > 0 ? (
        <p>Score: {anime.score}</p>
      ) : (
        <p>To be aired: {anime.start_date || "date not released"}</p>
      )}
      <div className="anime__icons">
        <Tooltip title="Add to my list" aria-label="add to list">
          <Fab
            size="small"
            color="primary"
            onClick={() =>
              auth.uid ? addToList(anime) : history.push("/login")
            }
          >
            <AddIcon />
          </Fab>
        </Tooltip>
        <Tooltip title="completed" aria-label="add to completed">
          <IconButton
            size="small"
            id="completed__button"
            onClick={() =>
              auth.uid ? addToList(anime, "completed") : history.push("/login")
            }
          >
            <CheckCircleIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Watching soon" aria-label="add to watching">
          <IconButton
            size="small"
            id="watching"
            onClick={() =>
              auth.uid ? addToList(anime, "soon") : history.push("/login")
            }
          >
            <LiveTvSharpIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Dropped" aria-label="add to Dropped">
          <IconButton
            size="small"
            color="secondary"
            onClick={() =>
              auth.uid ? addToList(anime, "dropped") : history.push("/login")
            }
          >
            <CancelIcon />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToList: (anime, status) => dispatch(addToList(anime, status)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Anime);
