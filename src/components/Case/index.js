import React from "react";
import logo from "../../image/zephyr_logo_web.jpg";
import SectionVideo from "./sectionVideo";

const Case = () => {
  return (
    <div>
      <main className="flex flex-col gap-7 mt-8">
        <h1 className="text-green-zephyr text-center uppercase text-xl font-bold">
          title
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          velit iste, totam eius explicabo nostrum, quas id, libero aspernatur
          dicta placeat aperiam hic culpa repellat at eos quibusdam commodi
          suscipit.
        </p>
        <img src={logo} alt="Zephir Logo" className="w-full" />
        <SectionVideo
          title="video 1"
          src={"https://www.youtube.com/embed/cWDJoK8zw58"}
        />
        <SectionVideo
          title="video 2"
          src={"https://www.youtube.com/embed/cWDJoK8zw58"}
        />
      </main>
    </div>
  );
};

export default Case;
