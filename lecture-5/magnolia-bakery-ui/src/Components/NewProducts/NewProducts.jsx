import ProductItems from "../Products/ProductItems";
import Headlines from "../../shared/Headlines";
import Button from "../../shared/Button";
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
      <Headlines
        products="Treats for any Occasion"
        headline="We’ve got you covered for any holiday, special occasion, or cause for celebration."
      />
      <Button btn="ASK QUESTIONS!" />

      <div className="flex flex-wrap justify-center gap-6 p-4">
        {Pictures.map((pics) => (
          <ProductItems
            key={pics.id}
            image={pics.image}
            info={pics.info}
            sizeClass="w-full h-75"
          />
        ))}
      </div>
    </div>
  );
}
export default NewProducts;
