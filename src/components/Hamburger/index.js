import React from "react";
import { useState } from "react";
import "../../index.css";
import "./styles.css";

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`hamburger ${open && "active"}`}
      onClick={() => setOpen(!open)}
    >
      <div className={`hamburger__line ${open && "active"}`}></div>
    </div>
  );
};

export default Hamburger;
