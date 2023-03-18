import React from "react";
import "../../index.css";
import logo from "../../image/zephyr_logo_web copy.jpg";
import Hamburger from "../Hamburger/index"

const Menu = () => {
  return (
    <nav className="pb-2 border-2 border-white border-b-teal-600 ">
      <div className="flex justify-between ">
        <img src={logo} alt="Zephir Logo" className="w-24" />
        <Hamburger />
      </div>
    </nav>
  );
};

export default Menu;
