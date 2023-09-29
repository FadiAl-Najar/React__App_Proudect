import data from "../Data.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import '/home/fadi/app_proudect/src/Component/Cards/Cadrs.css';

function Cards() {
  return (
    <>
    <div className="parent_card">
      {data.map((item) => {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={item.image_url} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              {/* <Card.Text>
                {item.description}
              </Card.Text> */}
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        );
      })}
      </div>
    </>
  );
}

export default Cards;
