import CardComponent from "../Cards/Cards";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import "./Main.css";

function Main() {
  let [items, setItems] = useState([]);
  let [showError, setshowError] = useState(false);

  let getDataFromAPI = async () => {
    let url = "https://www.themealdb.com/api/json/v1/1/search.php?f=m";
    try {
      let response = await fetch(url);
      let result = await response.json();
      // console.log(result.meals);
      setItems(result.meals);
    } catch (error) {
      console.log("Fetching Error data:", error);
    }
  };

  let handleSearchInput = (e) => {
    e.preventDefault();
    let getValue = e.target.search.value;
    const filterItems = items.filter((item) => {
      return item.strMeal.toLowerCase().includes(getValue.toLowerCase());
    });
    if (filterItems.length > 0) {
      setItems(filterItems);
    } else {
      setshowError(true);
    }
  };

  useEffect(() => {
    getDataFromAPI();
  }, []);

  return (
    <main>
      <div className="section_search">
        <Form className="d-flex" onSubmit={handleSearchInput}>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            name="search"
          />
          <Button variant="outline-success" type="submit">
            Search
          </Button>
        </Form>
      </div>
      <div className="parent_card">
        {showError ? (
          <p>
            Not found the result try another one! <br />{" "}
            <Nav.Link className="go_back" href="/">
              Go Back
            </Nav.Link>
          </p>
        ) : (
          items.map((item, index) => {
            return (
                <CardComponent
                  key={index}
                  id={item.idMeal}
                  image={item.strMealThumb}
                  title={item.strMeal}
                  description={item.strInstructions}
                />
            );
          })
        )}
      </div>
    </main>
  );
}

export default Main;
