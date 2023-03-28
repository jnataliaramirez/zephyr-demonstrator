import React from "react";

const Title = (props) => {
  return (
    <h1 className="text-green-zephyr text-center uppercase text-3xl font-bold lg:text-4xl">
      {props.children}
    </h1>
  );
};

export default Title;
