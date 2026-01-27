import TextFormat from "./TextFormat";
import laptopImg from "../assets/laptop-realistic_78370-511.avif";

function Main() {
  return (
    <div
      style={{
        display: "flex",
        textAlign: "center",
        marginTop: "20px",
      }}
    >
      <div style={{ width: "50%" }}>
        <h1 style={{ textAlign: "center", marginTop: "20px" }}>Lorem Ipsum</h1>
        <TextFormat text="Lorem ipsum dolor, sit amet consectetur adipisicing elit..." />
      </div>

      <img src={laptopImg} alt="Mac" style={{ width: "200px" }} />
    </div>
  );
}

export default Main;
