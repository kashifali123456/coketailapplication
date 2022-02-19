import React, { useState, useEffect } from "react";
import Welcome from "../../components/Welcome";
import Searchbar from "../../components/Searchbar";
import PopularDrinks from "../../components/PopularDrinks";
import { Menu } from "../../components/Data";
import PopularIngredients from "../../components/PopularIngredients";
import LatestDrinks from "../../components/LatestDrinks";
import RandomIngredients from "../../components/RandomIngredients";
import RandomDrinks from "../../components/RandomDrinks";

const Home = ({menuItems}) => {
 
  return (
    <>
      <Welcome />
      <Searchbar />
      <PopularDrinks items={menuItems[0]} />
      <PopularIngredients Piitems={menuItems[1]} />
      <LatestDrinks latestItems={menuItems[2]} />
      <RandomIngredients Ritems={menuItems[3]} />
      <RandomDrinks Rditems={menuItems[4]} />
    </>
  );
};

export default Home;
