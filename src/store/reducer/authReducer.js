const initState = {
  loading: false,
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        loading: false,
      };
    case "SIGN_OUT":
      return {
        ...state,
        loading: false,
      };
    case "AUTH_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "SIGNUP_SUCSS":
      return {
        ...state,
        loading: false,
      };
    case "SIGN_IN_ERR":
      alert(action.payload);
      return {
        ...state,
        loading: false,
      };
    case "SIGNUP_ERR":
      alert(action.payload);
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
export default authReducer;
