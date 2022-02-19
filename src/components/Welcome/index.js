import React from "react";
import "./style.css";
import Cocktailright from "../../Assets/Images/cocktail_right.png";
import Patreon from "../../Assets/Images/patreon_logo.png";
import Cocktailleft from "../../Assets/Images/cocktail_left.png";
const Welcome = () => {
  return (
    <div className="welcome">
      <div className="outer-welcome">
        <img src={Cocktailleft} />
        <div className="welcome-card">
          <h2>Welcome to TheCocktailDB</h2>
          <p>
            An open, crowd-sourced database of drinks and cocktails from around
            the world We also offer a <span>free JSON API </span>for anyone
            wanting to use it. If you like the site, please consider supporting
            us on Patreon by clicking the link below...
          </p>
          <img className="wel-center" src={Patreon} />
          <p className="wel-center">
            Click to Support: Currently 650 supporters
          </p>
        </div>
        <img src={Cocktailright} />
      </div>
      <hr />
    </div>
  );
};

export default Welcome;
