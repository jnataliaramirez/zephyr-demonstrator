import "../index.css";
import Cases from "./Cases";
import { Route, Routes, useParams } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import Footer from "./Footer";

function App() {
  return (
    <div className="container flex flex-col justify-between">
      <Menu />
      <main className="flex flex-col gap-7 mt-4"></main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case/:caseId" element={<Cases />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
