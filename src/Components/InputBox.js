import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import "../styles.css";
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
      setTopicEmpty(" You can't leave this field empty!");
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
      <div
        style={{
          display: "-webkit-flex",
          display: "-ms-flexbox",
          display: "flex",
          WebkitFlexWrap: "wrap",
          margin: "40px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        <div class="text-center">
          <p style={{ fontSize: "90%" }}>{props.text}</p>
        </div>
        <textarea
          class="form-control"
          onInput={handleInput}
          style={{
            width: "100%",
            height: "200px",
            textAlign: "left",
            resize: "none",
          }}
        ></textarea>
      </div>
    );
  }
  return (
    <div
      style={{
        display: "-webkit-flex",
        display: "-ms-flexbox",
        display: "flex",
        WebkitFlexWrap: "wrap",
        marginLeft: "40px",
        marginBottom: "20px",
        marginTop: "20px",

        flexWrap: "wrap",
      }}
    >
      <div class="text-center">
        <p style={{ fontSize: "90%", lineHeight: "100%" }}>{props.text}</p>
      </div>
      <input
        class="form-control"
        type={props.type}
        onInput={handleInput}
        onBlur={handleInput}
        max={props.max}
        min={props.min}
        style={{
          width: "95%",
        }}
        defaultValue={props.type === "number" ? props.default : null}
      ></input>
      <div class="text-center">
        <p
          style={{
            fontSize: "90%",
            lineHeight: "100%",
            color: "red",
            marginLeft: "5px",
          }}
        >
          {topicEmpty}
        </p>
      </div>
    </div>
  );
}

export default Header;
