import React from "react";
import "../../index.css";
import logo from "../../image/zephyr_logo_web copy.jpg";
import Hamburger from "../Hamburger/index";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <header>
      <nav className="pb-2 border-2 border-white border-b-teal-600 ">
        <div className="flex justify-between items-center  ">
          <Link to="/">
            <img src={logo} alt="Zephir Logo" className="w-24" />
          </Link>
          <Hamburger />
        </div>
      </nav>
    </header>
  );
};

export default Menu;
