import "../styles.css";
import { useRef } from "react";
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
  function toSearchResults() {
    navigate("../SearchResults", { query: input.current.value });
  }
  return (
    <div style={{ backgroundColor: "black", height: height }}>
      <button
        src="Logo.png"
        alt=""
        style={{ height: "100%" }}
        onClick={toLandingPage}
      />

      {props.isLoggedIn && (
        <>
          <button class="niceButton" onClick={toProfile}>
            View Profile
          </button>
          <button class="niceButton" onClick={toDefault}>
            Sign out
          </button>
        </>
      )}
      {(!props.isLoggedIn || props.isLoggedIn === null) && (
        <>
          <button class="niceButton" onClick={toSignUp}>
            Sign Up
          </button>
          <button class="niceButton" onClick={toSignIn}>
            Sign In
          </button>
        </>
      )}
      <div class="search">
        <form action="#">
          <input
            ref={input}
            type="text"
            placeholder=" Search Quizzes"
            name="search"
          />
          <button>
            <i
              class="fa fa-search"
              style={{ fontSize: "18px" }}
              onClick={toSearchResults}
            ></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Header;
