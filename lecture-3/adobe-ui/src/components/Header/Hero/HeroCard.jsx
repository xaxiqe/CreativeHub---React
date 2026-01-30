const Logo = "https://www.adobe.com/homepage/assets/svg/acrobat-pro.svg";
const Image =
  "https://www.adobe.com/homepage/media_1a48bf4c2572b72a97e1ce333977771f2e57a4fcc.png?width=2000&format=webply&optimize=medium";
function HeroCard({ title, text }) {
  function sayHi() {
    console.log("Hi React");
  }

  return (
    <section className="hero">
      <div className="hero-left">
        <img src={Logo} alt="left pic" className="hero-logo" />
        <h1>{title}</h1>
        <p>{text}</p>
        <button onClick={sayHi} className="btn-sm">
          Learn More
        </button>
      </div>
      <div className="hero-right">
        <img src={Image} alt="right img" className="hero-img" />
      </div>
    </section>
  );
}
export default HeroCard;
