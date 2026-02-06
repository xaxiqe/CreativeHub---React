function ProductItems({ image, info }) {
  return (
    <div className="py-8">
      <div>
        {image && (
          <img
            className="w-full h-75 mb-4 object-cover rounded-xl"
            src={image}
            alt="prod images"
          />
        )}
      </div>
      <span className="text-2xl text-gray-900 ">{info}</span>
    </div>
  );
}
export default ProductItems;
