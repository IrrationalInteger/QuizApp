import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Submit from "./Components/Submit";
import InputBox from "./Components/InputBox";
import Footer from "./Components/Footer";

function CreateQuiz() {
  let quiz;
  function setQuiz(q) {
    quiz = q;
  }
  function handleClick(e) {
    if (e.target.id === "Public") {
      tracker.public = true;
      tracker.private = false;
    } else {
      tracker.private = true;
      tracker.public = false;
    }
  }
  let tracker = {
    topic: "",
    name: "",
    description: "",
    duration: 1,
    public: true,
    private: false,
  };

  let height2 = (2 / 100) * window.screen.height;
  let height1 = window.innerHeight - height2 - (6 / 100) * window.screen.height;
  return (
    <div>
      <Header></Header>
      <div
        class="card w-50 text-center  justify-content-center"
        style={{ margin: "auto", width: "50%" }}
      >
        <InputBox
          op={0}
          tracker={tracker}
          text={"Enter the topic of your quiz:*  "}
          type={"text"}
        ></InputBox>
        <InputBox
          op={1}
          tracker={tracker}
          text={"Enter the name of your quiz:*  "}
          type={"text"}
        ></InputBox>
        <InputBox
          op={2}
          tracker={tracker}
          text={"Enter a description to your quiz:"}
          type={"text"}
        ></InputBox>
        <InputBox
          op={3}
          tracker={tracker}
          text={
            "Enter the duration of your quiz in minutes (max = 120, min = 1):*  "
          }
          type={"number"}
          max={120}
          min={1}
          default={1}
        ></InputBox>
        <div onClick={handleClick}>
          <div class="form-check" style={{ textAlign: "left", margin: "40px" }}>
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="Public"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Public
            </label>
          </div>
          <div class="form-check" style={{ textAlign: "left", margin: "40px" }}>
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="Private"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Private
            </label>
          </div>
        </div>
        <Submit tracker={tracker} setQuiz={setQuiz}></Submit>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default CreateQuiz;
