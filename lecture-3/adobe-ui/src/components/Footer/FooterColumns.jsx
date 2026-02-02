function FooterColumn({ heading, links }) {
  return (
    <div aria-label="footer-wrapper">
      <h4 className="footer-heading">{heading}</h4>
      <ul className="footer-list">
        {links.map((item) => (
          <li key={item} className="footer-item">
            <a href="#" className="footer-link">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default FooterColumn;
