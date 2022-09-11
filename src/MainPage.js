import { useState, useEffect } from "react";
import CreateQuiz from "./CreateQuiz";
import TakeQuiz from "./TakeQuiz";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./LandingPage";

function MainPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/TakeQuiz" element={<TakeQuiz />} />
        <Route path="/CreateQuiz" element={<CreateQuiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainPage;
