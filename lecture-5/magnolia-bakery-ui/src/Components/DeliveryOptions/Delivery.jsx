import ProductItems from "../Products/ProductItems";
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
      <div className="text-center mb-10">
        <h2 className="text-6xl font-mono font-bold">
          Delivery and Pick Up Options
        </h2>
        <p className="text-3xl  mt-2 tracking-wide ">
          We make it easy for you to get Magnolia Bakery’s best, <br />
          wherever you are. Order now for nationwide shipping, place an order to
          pickup at your local shop, or get in touch <br />
          with our team to arrange custom catering for your next event.
        </p>
        <a
          className="text-violet-950 leading-wide text-2xl bg-violet-400 rounded-xl p-4 hover:bg-violet-600 hover:text-white inline-block mt-4"
          href="#"
        >
          Learn More!
        </a>
      </div>
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
