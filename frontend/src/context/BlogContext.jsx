import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import { initialState, reducer } from "../reducer/blogReducer";
import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/";
export const BlogContext = createContext();
const { Provider } = BlogContext;

const BlogProvider = ({ children }) => {
  const [ihas, dispatch] = useReducer(reducer, initialState);

  const getBlogData = async (url) => {
    dispatch({ type: "START" });
    try {
      const { data } = await axios.get(`${BASE_URL}api/${url}/`);
      dispatch({ type: "BLOG_SUCCESS", payload: data });
      console.log(data);
    } catch (error) {
      dispatch({ type: "BLOG_FAIL" });
      console.log(error);
    }
  };
  const getBlogs = () => getBlogData("ihas");

  useEffect(() => {
    getBlogs();
  }, []);

  const values = {
    ihas,
    dispatch,
    getBlogs,
  };

  return <Provider value={values}>{children}</Provider>;
};

export const useBlogContext = () => {
  return useContext(BlogContext);
};

export default BlogProvider;
