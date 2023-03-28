import "../index.css";
import Cases from "./Cases";
import { Route, Routes } from "react-router-dom";
import data from "../services/data.json";
import Home from "./Home";
import Menu from "./Menu";

function App() {
  return (
    <div className="container flex flex-col justify-between">
      <Menu />
      <main className="flex flex-col gap-7 mt-4"></main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case_one" element={<Cases data={data[0]} />} />
      </Routes>
    </div>
  );
}

export default App;
