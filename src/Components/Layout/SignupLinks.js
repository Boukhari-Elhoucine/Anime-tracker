import React from "react";
import { Button, Avatar } from "@material-ui/core";
import { connect } from "react-redux";
import { signOut } from "../../store/action/authAction";
import { Link } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import "./SignupLinks.css";
function SignupLinks(props) {
  return (
    <div className="signuplinks">
      <div className="signuplinks__buttons">
        <Link className="profile__link" to="/profile">
          <Avatar src={props.profile.image_url && props.profile.image_url} />
        </Link>
        <Button
          className="header__button"
          color="primary"
          variant="contained"
          startIcon={<ExitToAppIcon />}
          onClick={props.signOut}
        >
          Log out
        </Button>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignupLinks);
