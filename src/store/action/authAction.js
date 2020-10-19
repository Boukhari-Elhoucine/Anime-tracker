export const signIn = (creds) => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch({ type: "AUTH_LOADING" });
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(creds.email, creds.password)
      .then(() => {
        dispatch({ type: "SIGN_IN" });
      })
      .catch((err) => {
        dispatch({ type: "SIGN_IN_ERR", payload: err });
      });
  };
};
export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch({ type: "AUTH_LOADING" });
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGN_OUT" });
      });
  };
};
export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch({ type: "AUTH_LOADING" });
    const firebase = getFirebase();
    const firestore = getFirebase().firestore();
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((response) => {
        return firestore.collection("users").doc(response.user.uid).set({
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          birthday: newUser.birthDay,
        });
      })
      .then(() => dispatch({ type: "SIGNUP_SUCSS" }))
      .catch((err) => dispatch({ type: "SIGNUP_ERR", payload: err }));
  };
};
