import React from "react";
import "./style.css";
import Cocktaillogo from "../../Assets/Images/cocktail-logo.png";
import Totalingrendients from "../../Assets/Images/ingredient-logo.png";
import Drinkimage from "../../Assets/Images/image2.png";
const Searchbar = () => {
  return (
    <>
      <div className="searchbar">
        <div className="search-input">
          <input type="text" placeholder="Search for a Cocktail..." />
          <button type="submit">
            <i class="fas fa-search"></i>
          </button>
        </div>
        <div className="search-card">
          <img src={Cocktaillogo} alt="" />
          <p>Total Drinks: 627</p>

          <img src={Totalingrendients} alt="" />
          <p>Total Ingrendients: 488</p>

          <img src={Drinkimage} alt="" />
          <p>Drink Image: 627{"(90cc)"}</p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Searchbar;
