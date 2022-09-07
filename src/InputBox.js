import { useState, useEffect } from "react";

function Header(props) {
  const [topicEmpty, setTopicEmpty] = useState();
  function handleBlur(e) {
    if (e.currentTarget.value === "")
      setTopicEmpty("You can't leave this field empty!");
    else setTopicEmpty();
  }
  if (props.desc) {
    return (
      <div>
        <p>{props.text}</p>
        <textarea
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
        onBlur={!props.desc ? handleBlur : null}
        max={props.max}
        min={props.min}
        defaultValue={props.type === "number" ? props.default : null}
        style={
          props.desc
            ? { width: "600px", height: "200px", textAlign: "left" }
            : {}
        }
      ></input>
      <p style={{ backgroundColor: "red" }}>{topicEmpty} </p>
    </div>
  );
}

export default Header;
