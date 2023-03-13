import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { toastWarnNotify } from "../helper/ToastNotify";

const PrivateRouter = () => {
  const currentUser = JSON.parse(localStorage.getItem("data")) || "";
  let location = useLocation();

  if (!currentUser) {
    toastWarnNotify("You must be logged in!");
    return <Navigate to="/" state={{ from: location }} replace />;
  } else {
    return <Outlet />;
  }
};

export default PrivateRouter;
