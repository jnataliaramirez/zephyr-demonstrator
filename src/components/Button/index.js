import { Link } from "react-router-dom";
import "./styles.css"

const Button = (props) => {
  return (
    <Link to={props.link} className="button" >
      {props.children}
    </Link>
  );
};

export default Button;
