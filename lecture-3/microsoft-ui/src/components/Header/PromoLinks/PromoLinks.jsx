import PromoLink from "./PromoLink";
import "./mid.css";
function PromoLinks() {
  const dataMid = [
    {
      id: 1,
      image:
        "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Quick-Links-Store-Tablet?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=85",
      text: "Shop surface devices",
    },
    {
      id: 2,
      image:
        "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Quick-Links-Store-Xbox-Controller?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=85",
      text: "Shop XBox games and console",
    },
    {
      id: 3,
      image:
        "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Quick-Links-Store-Accessories?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=85",
      text: "Shop for accesories",
    },
    {
      id: 4,
      image:
        "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Quick-Links-MSCOM-Building?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=85",
      text: "Shop for you buisness",
    },
    {
      id: 5,
      image:
        "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Quick-Links-Store-Laptop?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=85",
      text: "Find your next PC",
    },
    {
      id: 6,
      image:
        "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Quick-Links-MSCOM-Apps?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=85",
      text: "choose your Microsoft 365",
    },
  ];
  return (
    <section className="mid">
      {dataMid.map((mid) => (
        <PromoLink key={mid.id} image={mid.image} text={mid.text} />
      ))}
    </section>
  );
}
export default PromoLinks;
