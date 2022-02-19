import React from "react";
import "./style.css";
import Logo from "../../Assets/Images/logo.png";
import { Link } from "react-router-dom";
import "./style.css";
const Navbar = ({ setSearch }) => {
  return (
    <div className="navbar">
      <div className="innernavbar">
        <Link to="/home">
          <img src={Logo} />
        </Link>
        <div className="right-navbar">
          <Link className="home1 homee" to="/">
            Home
          </Link>
          <Link className="home1" to="api">
            API
          </Link>
          <Link className="home1" to="form">
            Form
          </Link>
          <Link to="https://www.facebook.com/">
            {" "}
            <i class="fab fa-facebook-square "></i>{" "}
          </Link>
          <Link to="/twitter.com">
            {" "}
            <i class="fab fa-twitter-square"></i>{" "}
          </Link>
          <div className="home1">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
