import AsideCard from "./AsideCard";
function Aside() {
  return (
    <section
      aria-label="side part of contnet"
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        marginTop: "20px",
      }}
    >
      <AsideCard title="The News" />
      <AsideCard title="Libro" />
      <AsideCard title="Elite" />
    </section>
  );
}
export default Aside;
