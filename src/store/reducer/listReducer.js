const initState = {
  animelist: [],
  loading: false,
};

const listReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TO_LIST":
      return state;
    case "FAILED_TO_ADD":
      return state;
    case "GET_LIST":
      return {
        ...state,
        animelist: action.list,
        loading: false,
      };
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "SEARCH_RESULT":
      return {
        ...state,
        animelist: action.payload,
        loading: false,
      };
    case "DELETE_ANIME":
      return state;
    default:
      return state;
  }
};
export default listReducer;
