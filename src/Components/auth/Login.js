import React, { useState } from "react";
import { TextField, Button, Paper, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { signIn } from "../../store/action/authAction";
import { Redirect } from "react-router-dom";
import "./Login.css";
function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    props.login({ email, password });
  };
  return (
    <div className="login">
      <Paper className="login__form">
        {props.uid && <Redirect to="/" />}
        <Typography variant="h5">Log In</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            className="input"
            label="Email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            className="input"
            label="Password"
            type="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button
            type="submit"
            disabled={props.loading}
            variant="contained"
            color="primary"
          >
            Log in
          </Button>
        </form>
      </Paper>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    uid: state.firebase.auth.uid,
    loading: state.auth.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: (creds) => dispatch(signIn(creds)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
