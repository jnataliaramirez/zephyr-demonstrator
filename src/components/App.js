import "../index.css";
import Case from "./Case";
import Menu from "./Menu/index.js";
import data from "../services/data.json";
import Title from "./Title";

function App() {
  return (
    <main className="flex flex-col gap-7 mt-8 lg:mt-12">
      <Title> Principal Title </Title>

      <div className="flex justify-around mt-4 lg:mt-8">
        <div>
          <h2> Type one</h2>
        </div>

        <div>
          <h2> Type two</h2>
        </div>
      </div>
    </main>
  );
}

export default App;
