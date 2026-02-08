function Headlines({ products, headline, link }) {
  return (
    <div className="text-center mb-8">
      <h2 className="text-6xl font-mono font-bold">{products}</h2>
      <p className="text-3xl  mt-2 tracking-wide whitespace-pre-line">
        {headline}
      </p>
    </div>
  );
}
export default Headlines;
