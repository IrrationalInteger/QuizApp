import { useState, useEffect } from "react";
import Header from "./Header";
import Submit from "./Submit";
import InputBox from "./InputBox";
function CreateQuiz() {
  function handleClick(e) {
    if (e.value === "Public") {
      tracker.public = true;
      tracker.private = null;
    } else {
      tracker.private = true;
      tracker.public = false;
    }
  }
  let tracker = {
    topic: null,
    name: null,
    description: null,
    duration: null,
    public: true,
    private: null,
  };
  return (
    <div>
      <Header></Header>
      <div>
        <InputBox
          tracker={tracker}
          text={"Enter the topic of your quiz:"}
          type={"text"}
        ></InputBox>
        <InputBox
          tracker={tracker}
          text={"Enter the name of your quiz:"}
          type={"text"}
        ></InputBox>
        <InputBox
          tracker={tracker}
          text={"Enter a description to your quiz:"}
          desc={true}
          type={"text"}
        ></InputBox>
        <InputBox
          tracker={tracker}
          text={"Enter the duration of your quiz in minutes:"}
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
          />{" "}
          Public
          <input type="radio" value="Private" name="gender" /> Private
        </div>
        <Submit></Submit>
      </div>
    </div>
  );
}

export default CreateQuiz;
