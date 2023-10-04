import { useEffect, useState } from "react";
import CardComponent from "../Cards/Cards";
import Form from "react-bootstrap/Form";
import "./Browse.css";

function Browse() {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  let getData = async () => {
    const urlAllData = "https://www.themealdb.com/api/json/v1/1/categories.php";
    try {
      let response = await fetch(urlAllData);
      let result = await response.json();
      // console.log(result.categories);
      setSelectedCategory(result.categories);
    } catch (error) {
      console.log("Fetching Error data:", error);
    }
  };

  const handleCategoryChange = async (e) => {
    e.preventDefault();
    const newSelectedCategory = e.target.value;
    const urlSeach = `https://www.themealdb.com/api/json/v1/1/search.php?s=${newSelectedCategory}`;
    console.log("input value", newSelectedCategory);
    if (newSelectedCategory === "all") {
      console.log("inside the if statement");
      setFilteredItems(getData());
    } else {
      try {
        let response = await fetch(urlSeach);
        let result = await response.json();
        setFilteredItems(result.meals);
      } catch (error) {
        console.log("Fetching Error data:", error);
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Form.Select
        className="select"
        aria-label="Default select example"
        name="category"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="">Filter here</option>
        <option value="all">All Category</option>
        <hr />
        <option value="beef">Beef</option>
        <hr />
        <option value="chicken">Chicken</option>
        <hr />
        <option value="lamb">Lamb</option>
        <hr />
        <option value="pasta">Pasta</option>
        <hr />
        <option value="seafood">Seafood</option>
        <hr />
        <option value="vegan">Vegan</option>
        <hr />
        <option value="vegetarian">Vegetarian</option>
        <hr />
        <option value="breakfast">Breakfast</option>
        <hr />
        <option value="goat">Goat</option>
      </Form.Select>

      {
        <div className="parent">
          {filteredItems.length > 0
            ? filteredItems.map((item) => {
                return (
                  <CardComponent
                    key={item.idMeal}
                    id={item.idMeal}
                    image={item.strMealThumb}
                    title={item.strCategory}
                    description={item.strInstructions}
                  />
                );
              })
            : selectedCategory.map((item) => {
                return (
                  <CardComponent
                    key={item.idCategory}
                    id={item.idCategory}
                    image={item.strCategoryThumb}
                    title={item.strCategory}
                    description={item.strCategoryDescription}
                  />
                );
              })}
        </div>
      }
    </>
  );
}

export default Browse;
