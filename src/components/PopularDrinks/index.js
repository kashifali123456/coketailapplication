import React from "react";
import "./style.css";
import PopularDrinkList from "../PopularDrinkList";
const PopularDrinks = ({ items }) => {
  return (
    <div className="popular-drinks">
      <h2>Popular Drinks</h2>
      <div className="Pd-card">
        {items.map((menuItem) => {
          return <PopularDrinkList menuItem={menuItem} />;
        })}
      </div>
      <hr />
    </div>
  );
};

export default PopularDrinks;
