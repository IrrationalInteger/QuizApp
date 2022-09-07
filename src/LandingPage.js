import { useState, useEffect } from "react";
import Header from "./Header";

function LandingPage() {
  let loggedIn = false;
  return (
    <div>
      <Header loggedIn={loggedIn}></Header>
      <div>
        <div>Monolithic Quizzes</div>
        <button>Create Quiz</button>
        <button>Take Quiz</button>
      </div>
    </div>
  );
}

export default LandingPage;
