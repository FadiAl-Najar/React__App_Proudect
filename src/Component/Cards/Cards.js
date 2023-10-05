import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./Cadrs.css";

function Cards(props) {
  let [show, setShow] = useState(false);
  let location = props.location;
  // console.log(props.handleDeleteFromLocalStorage);
  let handleShow = () => setShow(!show);

  let handleSaveToLocalStorage = () => {
    let saveItem = [];

    if (localStorage.getItem("favorite")) {
      saveItem = JSON.parse(localStorage.getItem("favorite"));
    }

    let data = {
      name: props.title,
      image: props.image,
      description: props.description,
    };
    saveItem.push(data);

    let stringData = JSON.stringify(saveItem);
    localStorage.setItem("favorite", stringData);
  };
 
  return (
    <>
      <Card style={{ width: "18rem" }} className="card" key={props.id}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
        </Card.Body>
        <div className="button mt-auto">
          {location === "Main" || location === "Browse" ? (
            <>
              <Button onClick={handleShow}>Show Recipe</Button>
              <Button onClick={handleSaveToLocalStorage}>Add to</Button>
            </>
          ) : null}
          {location === "Favorite" ? (
            <>
              <Button onClick={handleShow}>Show Recipe</Button>
              <Button onClick={props.handleDeleteFromLocalStorage}>
                Delete
              </Button>
            </>
          ) : null}
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
