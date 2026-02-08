import bookImg from "../assets/book-open-pages-close-up-600nw-2562942291.webp";
function AsideCard({ title, className = "" }) {
  return (
    <div className="text-2xl text-gray-500">
      <h1 className={className}>{title}</h1>
      <img src={bookImg} alt="Book" className="rounded" />
    </div>
  );
}
export default AsideCard;
