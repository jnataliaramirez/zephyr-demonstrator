import React from "react";

const Subtitle = (props) => {
  return (
    <h3 className="text-green-zephyr text-center uppercase text-xl font-bold md:text-2xl">
      {props.children}
    </h3>
  );
};

export default Subtitle;
