import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Main from "../Main/Main";
import { useState } from "react";
import data from "../Data.json";
import '/home/fadi/app_proudect/src/Component/Header/Header.css'

function Header() {
    let [items, setItems] = useState(data.categories);
   

    let handleSubmit = (e)=> {
        console.log(e);
        e.preventDefault();
        let getValue = e.target.search.value;
        const filterItems = data.categories.filter((item)=>{return item.strCategory.toLowerCase().includes(getValue.toLowerCase() )})
        setItems(filterItems);
    }
    
  return (
    <>
 
 
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/">Recipe Food</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/favorite">Favorite</Nav.Link>
            </Nav>
            
            <Nav.Link href="/" className="arrowLeft"><span className="arrowLeft">←</span>Previous</Nav.Link>
            <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              name = "search"
            />
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    <Main items={items} />

    </>
  );
}

export default Header;
