import Submit from "./Components/Submit";
import InputBox from "./Components/InputBox";
import GeneralLook from "./Components/GeneralLook.js";

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
    <GeneralLook className={"50"} width={"50%"}>
      <div className="text-center">
        <p
          style={{
            fontSize: "200%",
            marginTop: "50px",
            lineHeight: "200%",
          }}
        >
          <strong>Create a new Quiz</strong>
        </p>
      </div>
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
        <div
          className="form-check"
          style={{ textAlign: "left", margin: "40px" }}
        >
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="Public"
            checked
          />
          <label className="form-check-label" for="flexRadioDefault2">
            Public
          </label>
        </div>
        <div
          className="form-check"
          style={{ textAlign: "left", margin: "40px" }}
        >
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="Private"
          />
          <label className="form-check-label" for="flexRadioDefault1">
            Private
          </label>
        </div>
      </div>
      <Submit tracker={tracker} setQuiz={setQuiz}></Submit>
    </GeneralLook>
  );
}

export default CreateQuiz;
// test
