import { Route, Routes } from "react-router-dom";
import Case from "./Case";
import Home from "./Home";
import Menu from "./Menu";
import Footer from "./Footer";
import "../index.css";

function App() {
  return (
    <div className="container flex flex-col justify-between">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case/:caseId" element={<Case />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
