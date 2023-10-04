import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";

function Header() {

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary style_parent">
        <Container fluid className="style_nav" >
          <Navbar.Brand href="/" style={{ color: "white" }}>Recipe Food</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px"}}
              navbarScroll
            >
              <Nav.Link href="/" style={{ color: "white" }} className="rout">Home</Nav.Link>
              <Nav.Link href="/browse" style={{ color: "white" }} className="rout">Browse</Nav.Link>
              <Nav.Link href="/favorite" style={{ color: "white" }} className="rout">Favorite</Nav.Link>
            </Nav>           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
