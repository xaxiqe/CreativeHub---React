import TextFormat from "./TextFormat";
import laptopImg from "../assets/laptop-realistic_78370-511.avif";

function FooterCard({ title, text, className = "" }) {
  return (
    <div>
      <h2 className="font-bold">{title}</h2>
      <img src={laptopImg} alt="laptop" className="w-50 h-50 rounded" />
      <TextFormat className={className} text={text} />
    </div>
  );
}
export default FooterCard;
