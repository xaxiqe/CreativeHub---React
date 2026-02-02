import Cards from "./Cards";
import "./card.css";
import "./cardData";

function Card({ items }) {
  return (
    <section className="section-cards">
      {items.map((item) => (
        <Cards
          key={item.id}
          image={item.image}
          link={item.link}
          headline={item.headline}
          text={item.text}
          buttonLabel={item.buttonLabel}
        />
      ))}
    </section>
  );
}
export default Card;
