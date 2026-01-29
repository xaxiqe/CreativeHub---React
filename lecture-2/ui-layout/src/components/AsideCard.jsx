import bookImg from "../assets/book-open-pages-close-up-600nw-2562942291.webp";
function AsideCard({ title }) {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>{title}</h1>
      <img src={bookImg} alt="Book" style={{ width: "150px" }} />
    </div>
  );
}
export default AsideCard;
