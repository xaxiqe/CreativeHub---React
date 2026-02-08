function Hero() {
  return (
    <section
      className="
        w-full
        h-[80vh]
        bg-cover
        bg-center
        flex
        items-center
        
      "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNha2V8ZW58MHx8MHx8fDA%3D')",
      }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-lg text-blue-600">
          <h1 className="text-4xl font-bold mb-4">Fresh Baked Happiness</h1>

          <p className="text-3xl mb-6 ">
            Handmade cakes, cupcakes, and classic American treats.
          </p>

          <button className="text-violet-950 leading-wide text-2xl bg-violet-400 p-4 hover:bg-violet-600 hover:text-white px-6 py-3 rounded-full font-medium">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
