import AsideCard from "./AsideCard";
function Aside() {
  return (
    <div
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
    </div>
  );
}
export default Aside;
