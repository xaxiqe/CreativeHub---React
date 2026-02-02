function FeaturesRow({ image, text }) {
  return (
    <article className="features-items">
      <img className="features-pic" src={image} alt="logo" />
      <p className="features-text">{text}</p>
    </article>
  );
}
export default FeaturesRow;
