import TextFormat from "./TextFormat";
import laptopImg from "../assets/laptop-realistic_78370-511.avif";

function FooterCard({ title, text }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "250px",
        textAlign: "center",
      }}
    >
      <h2>{title}</h2>
      <img src={laptopImg} alt="laptop" style={{ width: "150px" }} />
      <TextFormat text={text} />
    </div>
  );
}
export default FooterCard;
