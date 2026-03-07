import Product from "./Product";

const products = [
  {
    id: 1,
    product: "MacBook M5 Pro",
    price: 2199,
    button: "AddToCart",
  },
  {
    id: 2,
    product: "Lenovo ThinkPad t14",
    price: 1600,
    button: "AddToCart",
  },
  {
    id: 3,
    product: "MacBook Nano",
    price: 1500,
    button: "AddToCart",
  },
  {
    id: 4,
    product: "MSI",
    price: 999,
    button: "AddToCart",
  },
];

function Products({ dispatch }) {
  return (
    <div className="space-y-8">
      <h2 className="font-semibold mt-5 text-center text-2xl">Products</h2>

      <ul className="flex justify-center items-center gap-5">
        {products.map((product) => (
          <Product key={product.id} product={product} dispatch={dispatch} />
        ))}
      </ul>
    </div>
  );
}

export default Products;
