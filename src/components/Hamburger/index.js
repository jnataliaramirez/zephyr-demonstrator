import { Link } from "react-router-dom";
import "../../index.css";
import "./styles.css";

const Hamburger = () => {

  return (
    <Link to="/">
      <div className="hamburger">
        <div className="hamburger__line"></div>
      </div>
    </Link>
  );
};

export default Hamburger;
