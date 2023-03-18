import { Menu } from "./Menu";
import "../index.css";
import Case from "./Case";

function App() {
  return (
    <div className="container flex flex-col justify-between" >
      <Menu />
      <Case />
    </div>
  );
}

export default App;
