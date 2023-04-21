import { useParams } from "react-router-dom";
import Video from "../Video";
import data from "../../services/data.json";
import Button from "../Button";

const Case = () => {
  const { caseId } = useParams();

  const routeInfo = data.find((item) => item.id === caseId);

  return (
    <div className="flex flex-col gap-7 mt-8 lg:m-12">
      <h1 className="text-green-zephyr text-center uppercase text-3xl font-bold lg:text-4xl">
        {routeInfo.title}
      </h1>
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:gap-6 md:items-center">
        <p className="text-left md:w-3/5 md:text-xl ">{routeInfo.text1}</p>
        <div className="flex justify-center w-full h-80 md:w-2/5">
          <img
            src={`./images/${routeInfo.principalImageSrc}`}
            alt="img"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="lg:flex lg:justify-around lg:gap-10">
        <Video title={routeInfo.video1Title} src={routeInfo.video1Src} />
        <Video title={routeInfo.video2Title} src={routeInfo.video2Src} />
      </div>

      <div className="flex justify-center mt-6">
        <div className="w-32">
          <Button link="/">Home 🏠 </Button>
        </div>
      </div>
    </div>
  );
};

export default Case;
