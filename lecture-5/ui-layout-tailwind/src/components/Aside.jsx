import AsideCard from "./AsideCard";
function Aside() {
  return (
    <section
      className="max-w-7xl mt-3 flex justify-center gap-1 bg-gray-500/10 mx-auto items-center"
      aria-label="side part of contnet"
    >
      <AsideCard className="text-2xl text-gray" title="The News" />
      <AsideCard className="text-2xl text-gray" title="Libro" />
      <AsideCard className="text-2xl text-gray" title="Elite" />
    </section>
  );
}
export default Aside;
