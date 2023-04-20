const Video = (props) => {
  return (
    <div className="mt-3 flex flex-col gap-5  md:mt-14 lg:w-1/2">
      <h3 className="text-green-zephyr text-center uppercase text-xl font-bold md:text-2xl">
        {props.title}
      </h3>
      <div className="flex justify-center">
        <iframe className="w-full rounded-lg  md:h-80" src={props.src}></iframe>
      </div>
    </div>
  );
};

export default Video;
