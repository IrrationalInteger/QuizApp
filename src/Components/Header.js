import "../styles.css";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Header(props) {
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
  function toSignIn() {
    navigate("../SignIn");
  }
  function toSignUp() {
    navigate("../SignUp");
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

  return (
    <div
      style={{ backgroundColor: "black", height: height, overflow: "hidden" }}
    >
      <button
        src="Logo.png"
        alt=""
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
