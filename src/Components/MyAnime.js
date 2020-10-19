import React from "react";
import "./MyAnime.css";
import { Tooltip, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { deleteAnime } from "../store/action/listAction";
import { connect } from "react-redux";
import { TableCell } from "@material-ui/core";
function MyAnime({ anime, deleteanime }) {
  return (
    <div className="myanime">
      <TableCell component="th" scope="row">
        <img src={anime.image} alt="" />
      </TableCell>
      <TableCell>{anime.title}</TableCell>
      <TableCell>{anime.type}</TableCell>
      <TableCell>Score:{anime.score}</TableCell>
      <TableCell>Aired:{anime.date}</TableCell>
      <Tooltip title="Delete from list">
        <IconButton aria-label="delete" onClick={() => deleteanime(anime)}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteanime: (anime) => dispatch(deleteAnime(anime)),
  };
};
export default connect(null, mapDispatchToProps)(MyAnime);
