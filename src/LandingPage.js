import Header from "./Components/Header";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer";
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
      <Header></Header>

      <div
        class="card w-75 text-center  justify-content-center"
        style={{ margin: "auto", width: "50%", height: height1 }}
      >
        <Card.Body class="justify-content-center">
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
        </Card.Body>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default LandingPage;
