import AsideCard from "./AsideCard";
function Aside() {
  return (
    <section
      className="max-w-6xl mt-3 flex justify-center gap-1 mx-auto items-center"
      aria-label="side part of contnet"
    >
      <AsideCard title="The News" />
      <AsideCard title="Libro" />
      <AsideCard title="Elite" />
    </section>
  );
}
export default Aside;
