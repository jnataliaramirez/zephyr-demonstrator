import Button from "../Button";
import "../../index.css";
import "./styles.css";

const Card = (props) => {
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
        <p class="card__content--description">{info.text1}</p>

        <Button link={`/case/${info.id}`}>Go</Button>
      </div>
    </article>
  );
};

export default Card;
