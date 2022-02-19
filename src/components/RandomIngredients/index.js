import React from "react";
import "./style.css";
import RandomIngredientList from "../RandomIngredientList";
const RandomIngredients = ({ Ritems }) => {
  return (
    <>
      <div className="random-ingredient">
        <h2>Random Ingredients</h2>
        <div className="Ri-card">
          {Ritems.map((RItem) => {
            return <RandomIngredientList RItem={RItem} />;
          })}
        </div>
      </div>
    </>
  );
};

export default RandomIngredients;
