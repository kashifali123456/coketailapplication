import React from "react";
import "./style.css";
import Gb from "../../Assets/Images/gb.png";
import logotsdb from "../../Assets/Images/logo-tsdb.png";
import logotadb from "../../Assets/Images/logo-tadb.png";
import logotmdb from "../../Assets/Images/logo-tmdb.png";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-upper">
          <h3>Browse By Name</h3>
          <p>A/B/C/D/E/F/G/H/I/J/K/L/M/N/O/P/Q/R/S/T/U/V/W/X/Y/Z</p>
        </div>

        <div className="lower-footer">
          <div className="flag-part">
            <p>
              © 2021 TheCocktailDB.
              <br />
              Proudly built in the UK <img src={Gb} />
            </p>
          </div>
          <div className="footer-logo">
            <img src={logotsdb} />
            <img src={logotadb} />
            <img src={logotmdb} />
          </div>
          <div className="footer-pages">
            <h4>Missing</h4>
            <h4> About</h4>
            <h4>Faq </h4>
            <h4> Contact</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
