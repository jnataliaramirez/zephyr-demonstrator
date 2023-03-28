import "../../index.css";
import "./styles.css";

const Cards = () => {
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
        <h4 class="card__content--title">Case One</h4>
        <p class="card__content--description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          culpa, adipisci nam maiores dolor eos pariatur error nulla eligendi
          necessitatibus nihil facilis reiciendis nobis tenetur optio ipsam
          molestiae? Provident, explicabo?
        </p>
        <a class="card__content--button">Go</a>
      </div>
    </article>
  );
};

export default Cards;
