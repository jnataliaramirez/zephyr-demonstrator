import { Link } from "react-router-dom";
import "../../index.css";
import "./styles.css";
import { click } from "@testing-library/user-event/dist/click";

const Cards = (props) => {
  const info = props.info;

  return (
    <article class="card">
      <div class="card__image">
        <img
          src="./images/imageCase1.jpg"
          alt="Zephyr"
          class="card__image--img"
        />
      </div>

      <div class="card__content">
        <h4 class="card__content--title">{info.title}</h4>
        <p class="card__content--description">
          {info.text1}
        </p>
        <Link to={`/case/${info.id}`} class="card__content--button">
          Go
        </Link>
      </div>
    </article>
  );
};

export default Cards;
