import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../Pages/Home";
import API from "../Pages/API";
import { Menu } from "../components/Data";
import Footer from "../components/Footer";
const Routers = () => {
  const [search, setSearch] = useState("");
  const [menuItems, setMenuItems] = useState(Menu);

  const handleSearch = () => {
    if (search) {
      Menu.map((item, i) => {
        const filtered = item.filter((item) =>
          item.title.toLowerCase().startsWith(search)
        );
        setMenuItems([...menuItems, filtered]);
      });
    } else {
      setMenuItems(Menu);
    }
  };
  useEffect(handleSearch, [search]);

  return (
    <>
      <Router>
        <Navbar setSearch={setSearch} />
        <Routes>
          <Route path="/" exact element={<Home menuItems={menuItems} />} />
          {/* <Route path="/api" exact element={<API />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Routers;
