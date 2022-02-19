import React from "react";
import "./style.css";
import RandomDrinksList from "../RandomDrinksList";
const RandomDrinks = ({ Rditems }) => {
  return (
    <div>
      <div className="random-drinks">
        <h2>Latest Drinks</h2>
        <div className="Rdcard-temp">
          {Rditems.map((RdItem) => {
            return <RandomDrinksList RdItem={RdItem} />;
          })}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default RandomDrinks;
