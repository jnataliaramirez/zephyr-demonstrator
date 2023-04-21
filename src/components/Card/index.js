import Button from "../Button";
import "../../index.css";
import "./styles.css";

const Card = (props) => {
  const info = props.info;

  return (
    <article className="card">
      <div className="card__image">
        <img
          src={`./images/${info.principalImageSrc}`}
          alt="Zephyr"
          className="card__image--img"
        />
      </div>

      <div className="card__content">
        <h4 className="card__content--title">{info.title}</h4>

        <Button link={`/case/${info.id}`}>Go</Button>
      </div>
    </article>
  );
};

export default Card;
