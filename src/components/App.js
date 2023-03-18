import "../index.css";
import Case from "./Case";
import Menu from "./Menu/index.js";
import data from "../services/data.json";

function App() {
  return (
    <div className="container flex flex-col justify-between">
      <Menu />
      <Case data={data[0]} />
    </div>
  );
}

export default App;
