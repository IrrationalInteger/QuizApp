import { useState, useEffect } from "react";
import Header from "./Components/Header";
import { useNavigate } from "react-router-dom";

function LandingPage(props) {
  function handleClick1(e) {
    navigate("./CreateQuiz");
  }
  function handleClick2(e) {
    navigate("./TakeQuiz");
  }
  const navigate = useNavigate();

  return (
    <div>
      <Header></Header>
      <div>
        <div>Monolithic Quizzes</div>
        <button onClick={handleClick1}>Create Quiz</button>
        <button onClick={handleClick2}>Take Quiz</button>
      </div>
    </div>
  );
}

export default LandingPage;
