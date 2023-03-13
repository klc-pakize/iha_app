import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import { initialState, reducer } from "../reducer/authReducer";
import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const BASE_URL = "http://127.0.0.1:8000/";

export const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("satet", state);
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("data")) || "";
    if (currentUser.key || currentUser === "") {
      dispatch({ type: "LOGIN_SUCCESS", payload: currentUser });
    } else {
      dispatch({ type: "REGISTER_SUCCESS", payload: currentUser });
    }
  }, []);

  const login = async (userInfo, navigate) => {
    dispatch("START");
    try {
      const { data } = await axios.post(
        `${BASE_URL}users/auth/login/`,
        userInfo
      );
      console.log(data);
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
      localStorage.setItem("data", JSON.stringify(data));
      toastSuccessNotify("Login performed");
      navigate("/dashboard");
    } catch (err) {
      dispatch({ type: "FAIL" });
      toastErrorNotify("Login can not be performed");
    }
  };

  const logout = async (navigate) => {
    dispatch("START");
    try {
      await axios.post(`${BASE_URL}users/auth/logout/`);
      dispatch({ type: "LOGOUT" });
      localStorage.removeItem("data");

      toastSuccessNotify("Logout performed");
      navigate("/");
    } catch (err) {
      dispatch({ type: "FAIL" });
      toastErrorNotify("Logout can not be performed");
    }
  };

  const register = async (userInfo, navigate) => {
    dispatch("START");
    try {
      const { data } = await axios.post(`${BASE_URL}users/register/`, userInfo);
      dispatch({ type: "REGISTER_SUCCESS", payload: data });
      localStorage.setItem("data", JSON.stringify(data));

      toastSuccessNotify("Register performed");
      navigate("/dashboard");
    } catch (err) {
      dispatch({ type: "FAIL" });
      toastErrorNotify("Register can not be performed");
    }
  };

  const values = { state, dispatch, register, login, logout };
  return <Provider value={values}>{children}</Provider>;
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
