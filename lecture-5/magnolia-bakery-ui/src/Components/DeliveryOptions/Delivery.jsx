import ProductItems from "../Products/ProductItems";
import Headlines from "../../shared/Headlines";
import Button from "../../shared/Button";
const Pictures = [
  {
    id: 1,
    image:
      "https://www.magnoliabakery.com/cdn/shop/files/website01_1_900x.png?v=1651012445",
    info: "Nationwide Shipping",
  },
  {
    id: 2,
    image:
      "https://www.magnoliabakery.com/cdn/shop/files/website02_2_900x.png?v=1651012468",
    info: "Advance order for pick up options",
  },

  {
    id: 3,
    image:
      "https://www.magnoliabakery.com/cdn/shop/files/website03_900x.png?v=1651004898",
    info: "Catering & Events",
  },
];
function Delivery() {
  return (
    <div className="py-12  ">
      <Headlines
        products="Delivery and Pick Up Options"
        headline="We make it easy for you to get Magnolia Bakery’s best, wherever you are. Order now for nationwide shipping, place an order to pickup at your local shop, or get in touch with our team to arrange custom catering for your next event."
      />
      <Button btn="GET A QUOTE" />

      <div className="flex flex-wrap justify-center gap-6 p-4">
        {Pictures.map((pics) => (
          <ProductItems
            key={pics.id}
            image={pics.image}
            info={pics.info}
            sizeClass="w-full h-90"
          />
        ))}
      </div>
    </div>
  );
}
export default Delivery;
