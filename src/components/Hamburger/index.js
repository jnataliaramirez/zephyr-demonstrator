import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import "./styles.css";

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  return (
    <Link to="/">
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <div className="hamburger__line"></div>
      </div>
    </Link>
  );
};

export default Hamburger;
