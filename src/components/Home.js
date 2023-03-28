import "../index.css";
import Title from "./Title";
import Subtitle from "./Subtitle";
import Cards from "./Cards";
import Cases from "./Cases";
import { Link, Route, Routes } from "react-router-dom";
import data from "../services/data.json";

function Home() {
  return (
    <main className="flex flex-col gap-7 mt-8 lg:mt-12">
      <Routes>
        <Route path="/case_one" element={<Cases data={data[1]} />} />
      </Routes>

      <Title> Principal Title </Title>
      <div className="flex flex-col md:justify-around mt-4 lg:mt-8">
        <div>
          <Subtitle> Type one </Subtitle>
          <Cards></Cards>
        </div>

        {/* <div className="mt-8 lg:mt-0">
          <Subtitle> Type two </Subtitle>
          <Cards></Cards>
        </div> */}
      </div>
    </main>
  );
}

export default Home;
