import React from "react";
import "./style.css";
import PopularIngredientsList from "../PopularIngredientsList";
const PopularIngredients = ({ Piitems }) => {
  return (
    <>
      <div className="popularingredients">
        <h2>Popular Ingredients</h2>
        <div className="PI-map">
          {Piitems.map((PiItem) => {
            return <PopularIngredientsList PiItem={PiItem} />;
          })}
        </div>
        <hr />
      </div>
    </>
  );
};

export default PopularIngredients;
