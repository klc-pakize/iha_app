export const initialState = {
  loading: false,
  currentUser: "",
  error: "",
  token: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "START":
      return { ...state, loading: true };

    case "LOGIN_SUCCESS":
      console.log("action", action);
      return {
        ...state,
        currentUser: action.payload.user,
        token: action.payload.key,
        error: "",
        loading: false,
      };

    case "REGISTER_SUCCESS":
      return {
        ...state,
        currentUser: action.payload,
        token: action.payload.token,
        error: "",
        loading: false,
      };
    case "FAIL":
      return {
        ...state,
        currentUser: "",
        token: "",
        error: action.payload,
        loading: false,
      };
    case "LOGOUT":
      return {
        ...state,
        currentUser: "",
        token: "",
        error: "",
        loading: false,
      };
    default:
      break;
  }
};
