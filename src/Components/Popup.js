import { Modal, Button } from "react-bootstrap";

function Popup(props) {
  // props-> show(boolean var),title,close function (turns show to false)
  function clickHandler() {
    props.close();
    if (props.title === "Sign In") props.userHasAuthenticated(true);
  }
  return (
    <Modal
      onHide={props.close}
      show={props.modalShow}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer>
        <Button onClick={clickHandler}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default Popup;
