function ServicesCard({ title, text, link, image, title2, text2 }) {
  return (
    <article className="service-card">
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{text}</p>
      <a className="card-link" href="#">
        {link}
      </a>
      {image && <img src={image} className="card-pic" alt="desp" />}
      {title2 && <h3 className="card-title">{title2}</h3>}
      {text2 && <p className="card-text">{text2}</p>}
    </article>
  );
}
export default ServicesCard;
