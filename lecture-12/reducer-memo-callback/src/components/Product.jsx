function Product({ product, dispatch }) {
  return (
    <li className="border border-gray-500 rounded-xl px-6 py-6">
      <article>
        <h2 className="text-2xl text-gray-500">{product.product}</h2>
        <p className="font-bold mt-2">{product.price}$</p>
        <button
          onClick={() => {
            dispatch({
              type: "AddToCart",
              payload: product,
            });
          }}
          className="px-3 py-1 mt-3 bg-blue-400 text-white text-sm rounded hover:bg-blue-400/80"
        >
          {product.button}
        </button>
      </article>
    </li>
  );
}
export default Product;
