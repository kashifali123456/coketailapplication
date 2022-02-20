import React from "react";
import "./style.css";
import LatestDrinksList from "../LatestDrinksList";
const LatestDrinks = ({ latestItems }) => {
  return (
    <div>
      <div className="latest-drinks">
        <h2>Latest Drinks</h2>
        <div className="Lcard-temp">
          {latestItems.map((latestItem) => {
            return <LatestDrinksList latestItem={latestItem} />;
          })}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default LatestDrinks;
