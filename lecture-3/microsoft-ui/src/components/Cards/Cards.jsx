import Button from "../Header/Button/Button";

function Cards({ image, link, headline, text, buttonLabel }) {
  return (
    <div className="single-card">
      <img src={image} alt="" className="card-pic" />
      <a href="#" className="card-link">
        {link}
      </a>
      <h3 className="card-headline">{headline}</h3>
      <p className="card-text">{text}</p>
      <div className="card-btn">
        <Button label={buttonLabel}></Button>
      </div>
    </div>
  );
}
export default Cards;
