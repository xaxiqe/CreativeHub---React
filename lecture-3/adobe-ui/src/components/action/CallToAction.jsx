function CallToAction({ text, link }) {
  return (
    <section className="call-to-action">
      <p>{text}</p>
      <a href="#">{link}</a>
    </section>
  );
}
export default CallToAction;
