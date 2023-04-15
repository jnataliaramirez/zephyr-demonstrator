import "../index.css";
import Title from "./Title";
import Subtitle from "./Subtitle";
import Cards from "./Cards";

function Home() {
  return (
    <div className="flex flex-col gap-7 mt-8 lg:mt-12">
      <Title> Principal Title </Title>
      <div className="flex flex-col justify-center  md:flex-row md:justify-around mt-4 lg:mt-8">
        <div className="">
          <Subtitle> Type Rural </Subtitle>
          <div className="flex flex-col items-center ">

            <Cards></Cards>
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <Subtitle> Type Urban</Subtitle>
          <div className="flex flex-col items-center ">
            <Cards></Cards>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
