import React from "react";
import "./Header.css";
import LoginLinks from "./Layout/LoginLinks";
import SignupLinks from "./Layout/SignupLinks";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
function Header({ auth }) {
  const links = auth.uid ? <SignupLinks /> : <LoginLinks />;
  return (
    <div className="header">
      <Link className="header__logo" to="/">
        <h1>MAL</h1>
      </Link>
      <div className="header__auth">{links}</div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};
export default connect(mapStateToProps)(Header);
