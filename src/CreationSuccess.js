import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import GeneralLook from "./Components/GeneralLook";
import React from "react";

function CreationSuccess() {
  let height1 =
    window.innerHeight -
    (2 / 100) * window.screen.height -
    (6 / 100) * window.screen.height;
  async function copy() {
    await navigator.clipboard.writeText(
      "https://www.myQuizApp.com/Quizzes/Quiz212"
    );
  }

  return (
    <GeneralLook className="75" width="70%" height={height1}>
      <div style={{ width: "auto", height: "100vh" }}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/463/463574.png"
          alt=" Done Successfully"
          width="200"
          height="200"
          style={{ marginTop: "20px" }}
        />

        <h2 style={{ marginTop: "50px", color: "#ee8345" }}>
          Your quiz has been Created successfully !
        </h2>
        <h7>Thank you for using myQuizApp.com</h7>
        <h2
          style={{ marginTop: "50px", marginBottom: "30px", color: "#ee8345" }}
        >
          Here is the link for your quiz
        </h2>
        <a href="https://i.imgflip.com/2eaqtx.jpg">
          https://www.myQuizApp.com/Quizzes/Quiz212
        </a>
        <Button variant="primary" onClick={copy} style={{ marginLeft: "20px" }}>
          copy link
        </Button>
        <div style={{ marginTop: "100px" }}>
          <p style={{ fontSize: "20px" }}>
            {" "}
            You can check your quizzes{" "}
            <a href="https://media.makeameme.org/created/are-u-5ac9af.jpg">
              here
            </a>
          </p>
        </div>
      </div>
    </GeneralLook>
  );
}

export default CreationSuccess;
