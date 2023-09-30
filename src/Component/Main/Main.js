// import data from "../Data.json";
import CardComponent from "../Cards/Cards";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import "./Main.css";
// import { useState } from "react";

function Main(props) {
  // console.log(props.items);
  return (
    <>
  <div className="parent_card">
    {props.items &&
      typeof props.items === "object" &&
      Object.entries(props.items).map(([key, item]) => {
        console.log(typeof item);
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
  </div>;
  </>
  )
}

export default Main;
