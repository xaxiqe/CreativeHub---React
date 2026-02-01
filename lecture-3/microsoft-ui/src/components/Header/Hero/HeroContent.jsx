import Button from "../Button/Button";
function HeroContent({ title, text }) {
  return (
    <article className="hero-section">
      <div className="hero-items">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-text">{text}</p>
        <Button label="Discover Microsoft 365" />
      </div>
    </article>
  );
}
export default HeroContent;
