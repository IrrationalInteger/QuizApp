import { useState, useEffect } from "react";
import CreateQuiz from "./CreateQuiz";
import TakeQuiz from "./TakeQuiz";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./LandingPage";
import SearchResults from "./SearchResults";

function MainPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/TakeQuiz" element={<TakeQuiz />} />
        <Route path="/CreateQuiz" element={<CreateQuiz />} />
        <Route path="/SearchResults" element={<SearchResults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainPage;
