import { useState, useEffect } from "react";

function Header(props) {
  const [topicEmpty, setTopicEmpty] = useState();
  function handleInput(e) {
    if (props.op === 3) {
      if (e.currentTarget.value !== "") {
        if (e.currentTarget.value < 1) e.currentTarget.value = 1;
        if (e.currentTarget.value > 120) e.currentTarget.value = 120;
      }
    }
    if (e.currentTarget.value === "") {
      setTopicEmpty("You can't leave this field empty!");
    } else setTopicEmpty();
    switch (props.op) {
      case 0:
        props.tracker.topic = e.currentTarget.value;
        break;
      case 1:
        props.tracker.name = e.currentTarget.value;
        break;
      case 2:
        props.tracker.description = e.currentTarget.value;
        break;
      case 3:
        props.tracker.duration = e.currentTarget.value;
        break;
      default:
        break;
    }
  }
  if (props.op === 2) {
    return (
      <div>
        <p>{props.text}</p>
        <textarea
          onInput={handleInput}
          style={{
            width: "600px",
            height: "200px",
            textAlign: "left",
            resize: "none",
          }}
        ></textarea>
      </div>
    );
  }
  return (
    <div>
      <p>{props.text}</p>
      <input
        type={props.type}
        onInput={handleInput}
        onBlur={handleInput}
        max={props.max}
        min={props.min}
        defaultValue={props.type === "number" ? props.default : null}
        style={
          props.desc
            ? { width: "600px", height: "200px", textAlign: "left" }
            : {}
        }
      ></input>
      <p style={{ color: "red" }}>{topicEmpty} </p>
    </div>
  );
}

export default Header;
