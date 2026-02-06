import ProductItems from "../Products/ProductItems";
const Pictures = [
  {
    id: 1,
    image:
      "https://cdn.shopify.com/s/files/1/0565/9757/7916/products/ClassicBananaPudding_1280x.jpg?v=1660585947",
    info: "Best Sellers",
  },
  {
    id: 2,
    image:
      "https://cdn.shopify.com/s/files/1/0565/9757/7916/files/Birthday__10.jpg?v=1632997548",
    info: "Birthday",
  },

  {
    id: 3,
    image:
      "https://cdn.shopify.com/s/files/1/0565/9757/7916/files/Brownie__16.jpg?v=1632996431",
    info: "Gift Under 50",
  },
  {
    id: 4,
    image:
      "https://cdn.shopify.com/s/files/1/0565/9757/7916/files/Grop_Shot_25335.jpg?v=1632996430",
    info: "Losta Chocolate!",
  },
];
function NewProducts() {
  return (
    <div className="py-12 mb-24 bg-green-200">
      <div className="text-center mb-8">
        <h2 className="text-6xl font-mono font-bold">
          Treats for any Occasion
        </h2>
        <p className="text-3xl  mt-2 tracking-wide">
          We’ve got you covered for any holiday, special occasion, or cause for
          celebration.
        </p>
        <a
          className="text-violet-950 leading-wide text-2xl bg-violet-400 rounded-xl p-4 hover:bg-violet-600 hover:text-white inline-block mt-4"
          href="#"
        >
          VIEW MORE
        </a>
      </div>
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {Pictures.map((pics) => (
          <ProductItems
            key={pics.id}
            image={pics.image}
            sizeClass="w-full h-75"
          />
        ))}
      </div>
    </div>
  );
}
export default NewProducts;
