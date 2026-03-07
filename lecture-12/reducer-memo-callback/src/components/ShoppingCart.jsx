function ShoppingCart({ cart, dispatch }) {
  return (
    <>
      <div className="container flex justify-around">
        <h1 className="text-3xl text-gray-700 font-bold">Add To Cart</h1>
        <div className="relative">
          <button className="text-4xl">🛒</button>
          <span className=" absolute top-0 right-1 w-5 h-5 text-white text-xs font-bold grid place-items-center rounded-full bg-blue-600">
            {cart.reduce((total, idx) => total + idx.quantity, 0)}
          </span>
        </div>
      </div>

      <ul className="mt-6 max-w-lg center space-y-2 ">
        {cart.map((item) => (
          <li
            className="flex justify-between items-center border p-3 rounded "
            key={item.id}
          >
            <span className="font-semibold text-2xl text-gray-400">
              {item.product}
            </span>

            <span className="font-bold">{item.price * item.quantity}$</span>

            <div className="flex gap-2">
              <button
                onClick={() => {
                  dispatch({
                    type: "DecrementQuantity",
                    payload: item.id,
                  });
                }}
                className="px-2 bg-gray-300 hover:bg-black/50"
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => {
                  dispatch({
                    type: "IncrementQuantity",
                    payload: item.id,
                  });
                }}
                className="px-2 bg-gray-300 hover:bg-black/50"
              >
                +
              </button>
            </div>
            <button
              onClick={() => {
                dispatch({
                  type: "RemoveItem",
                  payload: item.id,
                });
              }}
              className="text-red-500 text-sm mt-2 bg-black/20 hover:bg-black/50 py-1 px-2 border border-gray-400 rounded"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
export default ShoppingCart;
