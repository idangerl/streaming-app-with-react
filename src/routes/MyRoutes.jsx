import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import MovieDetails from "../pages/MovieDetails";

function MyRoutes() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default MyRoutes;
