import SectionVideo from "./sectionVideo";

const Case = (props) => {
  const info = props.data;

  return (
    <div>
      <main className="flex flex-col gap-7 mt-8 lg:mt-12">
        <h1 className="text-green-zephyr text-center uppercase text-3xl font-bold lg:text-4xl">
          {info.title}
        </h1>
        <div className="flex flex-col gap-4 md:flex-row md:gap-6 md:items-center">
          <p className="text-center md:text-xl ">{info.text1}</p>
          <div className="flex justify-center w-full ">
            <img
              src={`./images/${info.principalImageSrc}`}
              alt="img"
              className="w-80"
            />
          </div>
        </div>
        <div className="lg:flex lg:justify-around lg:gap-10">
          <SectionVideo title={info.video1Title} src={info.video1Src} />
          <SectionVideo title={info.video2Title} src={info.video2Src} />
        </div>
      </main>
    </div>
  );
};

export default Case;
