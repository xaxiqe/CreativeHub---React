import ProductItems from "./ProductItems";

const Pictures = [
  {
    id: 1,
    image:
      "https://www.magnoliabakery.com/cdn/shop/products/92edb133-7d0b-4050-8984-fce180ed4ba0_500x.jpg?v=1632768575",
    info: "Cupcakes",
  },
  {
    id: 2,
    image:
      "https://cdn.shopify.com/s/files/1/0565/9757/7916/files/Catering_Event_189.jpg?v=1632996431",
    info: "Brownie and Bars",
  },

  {
    id: 3,
    image:
      "https://www.magnoliabakery.com/cdn/shop/products/Choc_Chunk_Blondie_2PK_25838_500x.png?v=1633459674",
    info: "Cakes",
  },
  {
    id: 4,
    image:
      "https://www.magnoliabakery.com/cdn/shop/products/MiniIceboxBars_1_25868_500x.jpg?v=1632989401",
    info: "Sampler Packs",
  },
  {
    id: 5,
    image:
      "https://cdn.shopify.com/s/files/1/0565/9757/7916/files/Banana_Pudding_Lovers_Sampler_Pack_1.jpg?v=1720469033",
    info: "Banana Pudding",
  },
];
function Products() {
  return (
    <div className="py-8">
      <div className="text-center mb-8">
        <h2 className="text-6xl font-mono font-bold">Our Products</h2>
        <p className="text-3xl  mt-2 tracking-wide">
          For more than 25 years, Magnolia Bakery has been making America’s
          favorite baked goods the old-fashioned <br /> way: from scratch, in
          small batches, and using the finest ingredients.
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
          <ProductItems key={pics.id} image={pics.image} info={pics.info} />
        ))}
      </div>
    </div>
  );
}
export default Products;
