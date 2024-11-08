import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import SeriesPage from "./pages/SeriesPage";
import MoviesPage from "./pages/MoviesPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow px-4 md:px-8 lg:px-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/series" element={<SeriesPage />} />
            <Route path="/movies" element={<MoviesPage />} />
          </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
