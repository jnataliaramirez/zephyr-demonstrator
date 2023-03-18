import React from "react";

const SectionVideo = (props) => {
  return (
    <>
      <h3 className="text-green-zephyr text-center uppercase text-xl font-bold">
        {props.title}
      </h3>
      <div className="flex justify-center w-screen">
        <iframe src={props.src}></iframe>
      </div>
    </>
  );
};

export default SectionVideo;
