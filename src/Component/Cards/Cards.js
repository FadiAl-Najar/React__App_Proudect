import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./Cadrs.css";

function Cards(props) {
  let [show, setShow] = useState(false);

  let handleShow = () => setShow(!show);

  return (
    <>
      <Card style={{ width: "18rem" }} className="card" key={props.id}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
        </Card.Body>
        <div className="button mt-auto">
          <Button onClick={handleShow}>Show Description</Button>
        </div>
      </Card>

      <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton style={{ backgroundColor: "#b54507" }}>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShow}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Cards;
