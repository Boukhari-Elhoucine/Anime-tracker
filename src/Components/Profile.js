import React, { useState } from "react";
import "./Profile.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  Paper,
  Typography,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Result from "./Result";
import ProgressBar from "./ProgressBar";
import Moment from "react-moment";
function Profile({ profile, auth }) {
  const [file, setFile] = useState(null);
  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected) {
      setFile(selected);
    }
  };
  if (!auth.uid) {
    return <Redirect to="/" />;
  }
  return (
    <div className="profile">
      <div className="profile__left">
        <Paper className="profile__info">
          <Avatar
            src={profile.image_url && profile.image_url}
            variant="rounded"
            className="profile__image"
          />
          <div className="profile__upload">
            <input
              accept="image/*"
              id="icon-button-file"
              style={{ display: "none" }}
              type="file"
              onChange={changeHandler}
            />
            <label htmlFor="icon-button-file">
              <Tooltip
                title="Edit profile picture"
                aria-label="profile picture"
              >
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCamera />
                </IconButton>
              </Tooltip>
            </label>
            {file && (
              <ProgressBar file={file} setFile={setFile} uid={auth.uid} />
            )}
          </div>
          <Typography variant="body1">LastName:{profile.lastName}</Typography>
          <Typography variant="body1">FirstName:{profile.firstName}</Typography>
          <Typography variant="body2">
            Birthday:
            <Moment format="DD/MM/yyyy" date={profile?.birthday?.toDate()} />
          </Typography>
        </Paper>
      </div>
      <div className="profile__right">
        <Result uid={auth.uid} />
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};
export default connect(mapStateToProps)(Profile);
