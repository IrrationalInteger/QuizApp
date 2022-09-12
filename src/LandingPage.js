import { useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import GeneralLook from "./Components/GeneralLook";
function LandingPage(props) {
  function handleClick1(e) {
    navigate("./CreateQuiz");
  }
  function handleClick2(e) {
    navigate("./TakeQuiz");
  }
  const navigate = useNavigate();
  let height2 = (2 / 100) * window.screen.height;
  let height1 = window.innerHeight - height2 - (6 / 100) * window.screen.height;
  return (
    <div style={{ height: "100vh" }}>
      <GeneralLook cl="75" width="50%" height={height1}>
        <div>
          <Card.Title style={{ fontSize: "75px" }}>
            Monolithic Quizzes
          </Card.Title>
          <Button
            style={{ height: "50px", width: "200px", margin: "20px" }}
            variant="primary"
            onClick={handleClick2}
          >
            Take Quiz
          </Button>
          <Button
            style={{ height: "50px", width: "200px", margin: "20px" }}
            variant="secondary"
            onClick={handleClick1}
          >
            Create Quiz
          </Button>
        </div>
      </GeneralLook>
    </div>
  );
}

export default LandingPage;
