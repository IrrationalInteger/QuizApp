import { useState } from "react";
import { AppContext } from "./lib/contextLib";
import CreateQuiz from "./CreateQuiz";
import TakeQuiz from "./TakeQuiz";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./LandingPage";
import SearchResults from "./SearchResults";
import CreationSucces from "./CreationSuccess";
function MainPage() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/TakeQuiz" element={<TakeQuiz />} />
          <Route path="/CreateQuiz" element={<CreateQuiz />} />
          <Route path="/SearchResults" element={<SearchResults />} />
          <Route path="/CreationSuccess" element={<CreationSucces />} />
        </Routes>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default MainPage;
