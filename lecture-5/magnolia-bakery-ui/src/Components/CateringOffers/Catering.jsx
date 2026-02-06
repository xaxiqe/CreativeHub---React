const Image =
  "https://www.magnoliabakery.com/cdn/shop/files/website02_1280x.png?v=1651002817";
function Catering() {
  return (
    <section className="flex w-full py-24">
      <div className="flex flex-col items-center justify-center  bg-pink-50">
        <h2 className="text-6xl font-mono font-bold mb-5">
          Catering, Gifting & Events
        </h2>
        <p className="text-3xl  mt-2 tracking-wide mb-5 px-100 ">
          Catering, Gifting & Events Our catering, gifting and events team is
          ready to fill your event or celebration with a custom selection of
          Magnolia Bakery’s best creations. No occasion is too large—or too
          small!
        </p>
        <a
          className="text-violet-950 leading-wide text-2xl bg-violet-400 rounded-xl p-6 px-10 hover:bg-violet-600 hover:text-white font-bold transition"
          href="#"
        >
          Get Started
        </a>
      </div>
      <img src={Image} alt="Catering picture" className="w-full h-[60vh]" />
    </section>
  );
}
export default Catering;
