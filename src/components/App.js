import "../index.css";
import Case from "./Cases";
import Menu from "./Menu/index.js";
import data from "../services/data.json";
import Title from "./Title";
import Subtitle from "./Subtitle";
import Cards from "./Cards";

function App() {
  return (
    <main className="flex flex-col gap-7 mt-8 lg:mt-12">
      <Title> Principal Title </Title>

      <div className="flex justify-around mt-4 lg:mt-8">
        <div>
          <Subtitle> Type one </Subtitle>
          <Cards></Cards>
        </div>

        {/* <div>
          <Subtitle> Type two </Subtitle>
        </div> */}
      </div>
    </main>
  );
}

export default App;
