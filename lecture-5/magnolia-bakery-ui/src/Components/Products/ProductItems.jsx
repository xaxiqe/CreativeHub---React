function ProductItems({ image, info, sizeClass = "w-full h-64" }) {
  return (
    <article className="py-8">
      <img
        src={image}
        alt={info}
        className={`object-cover rounded-2xl mx-auto ${sizeClass}`}
      />
      <p className="mt-3 text-xl font-semibold text-center">{info}</p>
    </article>
  );
}

export default ProductItems;
