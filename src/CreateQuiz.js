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
    if (e.target.value === "Public") {
      tracker.public = true;
      tracker.private = false;
    } else {
      tracker.private = true;
      tracker.public = false;
    }
    console.log(tracker);
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
        class="card w-75 text-center  justify-content-center"
        style={{ margin: "auto", width: "50%", height: height1 }}
      >
        <InputBox
          op={0}
          tracker={tracker}
          text={"Enter the topic of your quiz:*"}
          type={"text"}
        ></InputBox>
        <InputBox
          op={1}
          tracker={tracker}
          text={"Enter the name of your quiz:*"}
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
            "Enter the duration of your quiz in minutes (max = 120, min = 1):*"
          }
          type={"number"}
          max={120}
          min={1}
          default={1}
        ></InputBox>
        <div onChange={handleClick}>
          <input
            type="radio"
            value="Public"
            name="gender"
            defaultChecked={"checked"}
          />
          Public
          <input type="radio" value="Private" name="gender" /> Private
        </div>
        <Submit tracker={tracker} setQuiz={setQuiz}></Submit>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default CreateQuiz;
