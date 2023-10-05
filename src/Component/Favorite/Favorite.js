import React, { useEffect, useState } from "react";
import CardComponent from "../Cards/Cards";
import "./Favorite.css";

function Favorite() {
  const [favoriteData, setFavoriteData] = useState([]);

  let getItemFromLocalStorage = () => {
    const getDataFromLocal = JSON.parse(localStorage.getItem("favorite"));

    if (getDataFromLocal) {
      setFavoriteData(getDataFromLocal);
    }
  };

  let handleDeleteFromLocalStorage = (deleteItems) => {
    const favoriteCopy = [...favoriteData];
    const itemIndex = favoriteCopy.findIndex(
      (item) => item.name === deleteItems
    );

    if (itemIndex !== -1) {
      favoriteCopy.splice(itemIndex, 1);
      setFavoriteData(favoriteCopy);
      localStorage.setItem("favorite", JSON.stringify(favoriteCopy));
    }
  };
  useEffect(() => {
    getItemFromLocalStorage();
  }, []);

  return (
    <>
      <h2>Favorite Items</h2>
      <div className="favorite_div">
        {favoriteData.length !== 0 ? (
          favoriteData.map((item, index) => {
            return (
              <CardComponent
                key={index}
                image={item.image}
                title={item.name}
                description={item.description}
                location={"Favorite"}
                handleDeleteFromLocalStorage={() =>
                  handleDeleteFromLocalStorage(item.name)
                }
              />
            );
          })
        ) : (
          <h1>Add some Favorite Recipe, Pleas</h1>
        )}
      </div>
    </>
  );
}

export default Favorite;
