import { useState, useEffect } from "react";
import "../styles.css";
function Submit(props) {
  const [topicEmpty, setTopicEmpty] = useState();
  function handleClick(e) {
    if (
      props.tracker.topic === "" ||
      (props.tracker.duration === "") | (props.tracker.name === "")
    )
      setTopicEmpty("You can't leave fields with an asterisk empty!");
    else {
      setTopicEmpty();
      props.setQuiz({
        topic: props.tracker.topic,
        name: props.tracker.name,
        description: props.tracker.description,
        duration: props.tracker.duration,
        public: props.tracker.public,
        private: props.tracker.private,
      });
      //Add to finish button:
      // collection.insert(objectToInsert, function (err) {
      //   if (err) return;
      //   // Object inserted successfully.
      //   var objectId = objectToInsert._id; // this will return the id of object inserted
      // });
    }
  }
  return (
    <div>
      <button onClick={handleClick} style={{ margin: "20px" }}>
        Start
      </button>
      <p style={{ color: "red", fontSize: "100%" }}>{topicEmpty} </p>
    </div>
  );
}

export default Submit;
