import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./LoginLinks.css";
function LoginLinks() {
  return (
    <div className="loginlinks">
      <div className="loginlinks__buttons">
        <Button
          className="header__button"
          component={Link}
          to={"/login"}
          size="medium"
          color="primary"
          variant="outlined"
        >
          Log In
        </Button>
        <Button
          className="header__button"
          component={Link}
          to={"/signup"}
          size="medium"
          color="primary"
          variant="contained"
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
}

export default LoginLinks;
