import React, { useState } from "react";
import { TextField, Button, Paper, Typography } from "@material-ui/core";
import "./SignUp.css";
import { signUp } from "../../store/action/authAction";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { KeyboardDatePicker } from "@material-ui/pickers";
function SignUp(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthDay, setBirthDay] = useState(new Date());
  const handleSubmit = (event) => {
    event.preventDefault();
    props.signUp({ firstName, lastName, email, password, birthDay });
  };
  return (
    <div className="signup">
      <Paper className="signup__form">
        {props.auth.uid && <Redirect to="/" />}
        <Typography variant="h5">Sign Up</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            className="signup__input"
            label="First Name"
            type="text"
            required
            onChange={(event) => setFirstName(event.target.value)}
          />
          <TextField
            className="signup__input"
            label="Last Name"
            required
            type="text"
            onChange={(event) => setLastName(event.target.value)}
          />
          <TextField
            className="signup__input"
            label="Email"
            type="email"
            required
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            className="signup__input"
            label="Password"
            type="password"
            required
            onChange={(event) => setPassword(event.target.value)}
          />
          <div>
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Birthday"
              format="dd/MM/yyyy"
              required
              value={birthDay}
              onChange={(date) => setBirthDay(date)}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </div>
          <Button
            type="submit"
            disabled={props.loading}
            variant="contained"
            color="primary"
          >
            Sign up
          </Button>
        </form>
      </Paper>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    loading: state.auth.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
