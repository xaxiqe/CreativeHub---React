import TextFormat from "./TextFormat";
import laptopImg from "../assets/laptop-realistic_78370-511.avif";

function Main() {
  return (
    <section
      className="max-w-6xl  flex justify-center mx-auto items-center  "
      aria-label="Main content"
    >
      <div>
        <h1 className="text-center text-3xl mb-2 font-bold">Lorem Ipsum </h1>
        <TextFormat text="Lorem ipsum dolor, sit amet consectetur adipisicing elit..." />
      </div>
      <img src={laptopImg} alt="Mac" className="w-120 h-120 " />
    </section>
  );
}

export default Main;
