import FavoriteItems from "./FavoriteItems";
import Headlines from "../../shared/Headlines";
import Button from "../../shared/Button";
const Pictures = [
  {
    id: 1,
    image:
      "https://www.magnoliabakery.com/cdn/shop/products/92edb133-7d0b-4050-8984-fce180ed4ba0_500x.jpg?v=1632768575",
    info: "Cupcakes",
    price: 12.5,

    button: "Order Now!",
    outOfStock: true,
  },
  {
    id: 2,
    image:
      "https://cdn.shopify.com/s/files/1/0565/9757/7916/files/Catering_Event_189.jpg?v=1632996431",
    info: "Brownie and Bars",
    price: 2.5,
    button: "Order Now!",
  },

  {
    id: 3,
    image:
      "https://www.magnoliabakery.com/cdn/shop/products/Choc_Chunk_Blondie_2PK_25838_500x.png?v=1633459674",
    info: "Cakes",
    price: 20.0,
    button: "Order Now!",

    outOfStock: true,
  },
  {
    id: 4,
    image:
      "https://www.magnoliabakery.com/cdn/shop/products/MiniIceboxBars_1_25868_500x.jpg?v=1632989401",
    info: "Sampler Packs",
    price: 7.5,
    button: "Order Now!",
  },
  {
    id: 5,
    image:
      "https://cdn.shopify.com/s/files/1/0565/9757/7916/files/Banana_Pudding_Lovers_Sampler_Pack_1.jpg?v=1720469033",
    info: "Banana Pudding",
    price: 6.5,
    button: "Order Now!",
  },
];
function Favorites() {
  return (
    <div className="py-8 mt-24 mb-24">
      <Headlines
        products="Our Products"
        headline="For more than 25 years, Magnolia Bakery has been making America’s
          favorite baked goods the old-fashioned  way: from scratch, in
          small batches, and using the finest ingredients."
      />
      <Button btn="VIEW MORE" />

      <div className="flex flex-wrap justify-center gap-6 p-4">
        {Pictures.map((pics) => (
          <FavoriteItems
            key={pics.id}
            image={pics.image}
            info={pics.info}
            price={pics.price}
            discountPrice={pics.discountPrice}
            button={pics.button}
            outOfStock={pics.outOfStock}
          />
        ))}
      </div>
    </div>
  );
}
export default Favorites;
