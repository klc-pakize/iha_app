export const initialState = {
  loading: false,
  ihaList: [],
  error: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "START":
      return { ...state, loading: true };
    case "BLOG_SUCCESS":
      return {
        ...state,
        ihaList: action.payload,
        error: "",
        loading: false,
      };
    case "BLOG_FAIL":
      return {
        ...state,
        ihaList: [],
        error: action.payload,
        loading: false,
      };

    default:
      break;
  }
};
