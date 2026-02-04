import TextFormat from "./TextFormat";

function Hero() {
  return (
    <article className="max-w-7xl mx-auto text-center px-6  bg-image-costum p-3">
      <h1 className="mt-3 mb-2 text-3xl  text-white">Creative Solutions</h1>
      <TextFormat
        className="text-white max-w-3xl mx-auto mb-3"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas consequuntur, sapiente veniam veritatis cupiditate inventore a esse itaque harum? Omnis odio accusamus similique doloribus sed maiores quod"
      />

      <TextFormat
        className="text-white max-w-3xl mx-auto mb-2"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas consequuntur, sapiente veniam veritatis cupiditate inventore a esse itaque harum? Omnis odio accusamus similique doloribus sed maiores quod"
      />
    </article>
  );
}

export default Hero;
