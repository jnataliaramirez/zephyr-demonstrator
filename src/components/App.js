import "../index.css";
import Cases from "./Cases";
import { Route, Routes } from "react-router-dom";
import data from "../services/data.json";
import Home from "./Home";

function App() {
  return (
    <main className="flex flex-col gap-7 mt-8 lg:mt-12">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case_one" element={<Cases data={data[0]} />} />
      </Routes>
    </main>
  );
}

export default App;
