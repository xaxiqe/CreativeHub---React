import Button from "../Header/Button/Button";
import "./slider.css";
function SliderItems({ headline, text, buttonLabel, image }) {
  return (
    <section className="slider">
      <div className="div-left">
        <h3 className="slider-headline">{headline}</h3>
        <p className="slider-text">{text}</p>
        <div>
          <div className="card-btn">
            <Button label={buttonLabel}></Button>
          </div>
        </div>
      </div>
      <div className="div-right">
        <img className="slider-pic" src={image} alt="hero-image" />
      </div>
    </section>
  );
}
export default SliderItems;
