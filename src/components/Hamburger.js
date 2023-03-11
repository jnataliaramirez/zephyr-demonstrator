import React from "react";
import { useState } from "react";
import "../index.css";
import "./Hamburger.css";

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="hamburger" onClick={() => setOpen(!open)} >
      <div className="hamburger__line"></div>
    </div>
  );
};

export default Hamburger;
