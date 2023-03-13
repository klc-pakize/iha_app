import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBars from "../components/NavBars";
import Dashboard from "../pages/Dashboard";
import Footers from "../components/Footers";
import BlogDetail from "../pages/BlogDetail";
import Auth from "../pages/Auth";
import About from "../pages/About";
import PrivateRouter from "./PrivateRouter";
import Reservation from "../pages/Reservation";
import ReservationDetail from "../pages/ReservationDetail";
import Search from "../pages/Search";

const AppRouter = () => {
  return (
    <Router>
      <NavBars />
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/reservation/:id" element={<Reservation />} />
        <Route path="/reservation" element={<ReservationDetail />} />
        <Route path="/search" element={<Search />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/detail/:id" element={<PrivateRouter />}>
          <Route path="" element={<BlogDetail />} />
        </Route>
        <Route path="/about" element={<About />} />
      </Routes>
      <Footers />
    </Router>
  );
};

export default AppRouter;
