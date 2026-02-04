import AsideCard from "./AsideCard";
function Aside() {
  return (
    <section
      className="container mt-3 flex justify-center gap-1 mx-auto items-center"
      aria-label="side part of contnet"
    >
      <AsideCard className="text-2xl text-gray" title="The News" />
      <AsideCard className="text-2xl text-gray" title="Libro" />
      <AsideCard className="text-2xl text-gray" title="Elite" />
    </section>
  );
}
export default Aside;
