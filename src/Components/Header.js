import "../styles.css";
import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Popup from "./Popup.js";
function Header(props) {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  let height = (6 / 100) * window.screen.height;
  const navigate = useNavigate();
  const input = useRef(null);
  const location = useLocation();
  function toDefault() {
    //terminate the session
    navigate(".." + location.pathname);
  }
  function toProfile() {
    navigate("../Profile");
  }

  function toSignUp() {
    setShow1(true);
  }
  function toSignIn() {
    setShow2(true);
  }
  function toLandingPage() {
    navigate("/", { replace: true });
  }
  function toSearchResults(event) {
    event.preventDefault();
    navigate("../SearchResults", { state: { query: input.current.value } });
  }
  function prevent(e) {
    e.preventDefault();
  }
  function closer1() {
    setShow1(false);
  }
  function closer2() {
    setShow2(false);
  }
  return (
    <div
      style={{ backgroundColor: "black", height: height, overflow: "hidden" }}
    >
      <Popup title="Sign Up" modalShow={show1} close={closer1}>
        <div>Sign Up</div>
      </Popup>
      <Popup title="Sign In" modalShow={show2} close={closer2}>
        <div>Sign In</div>
      </Popup>

      <input
        type="image"
        src="Logo.png"
        style={{ height: "100%" }}
        onClick={toLandingPage}
      />

      {props.isLoggedIn && (
        <>
          <button className="niceButton" onClick={toProfile}>
            View Profile
          </button>
          <button className="niceButton" onClick={toDefault}>
            Sign out
          </button>
        </>
      )}
      {(!props.isLoggedIn || props.isLoggedIn === null) && (
        <>
          <button className="niceButton" onClick={toSignUp}>
            Sign Up
          </button>
          <button className="niceButton" onClick={toSignIn}>
            Sign In
          </button>
        </>
      )}
      <div className="search">
        <form action="#">
          <input
            ref={input}
            type="text"
            placeholder=" Search Quizzes"
            name="search"
            onClick={prevent}
          />
          <button
            className="fa fa-search"
            style={{ fontSize: "18px" }}
            onClick={toSearchResults}
          ></button>
        </form>
      </div>
    </div>
  );
}

export default Header;
