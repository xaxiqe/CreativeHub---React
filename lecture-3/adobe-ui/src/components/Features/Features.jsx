import FeaturesRow from "./FeatureRow";
import "./features.css";

const headline = "Featured Products";
const featuresData = [
  {
    id: 1,
    image:
      "https://www.adobe.com/federal/footer/fragments/media_13514981498f3fa40f16d4005bc5604b3030e8b4b.png",
    text: "Adobe Reader",
  },
  {
    id: 2,
    image:
      "https://www.adobe.com/federal/footer/fragments/media_15856c21886cb3333ec5b6b02c8f4d08627ad59fe.png",
    text: "Adobe Express",
  },
  {
    id: 3,
    image:
      "https://www.adobe.com/federal/footer/fragments/media_187073d53c6db77acad4d7d8d1909fb04cc9cb071.png",
    text: "Firefly",
  },
  {
    id: 4,
    image:
      "https://www.adobe.com/federal/footer/fragments/media_1af87c70b29a2210b320389840ec88bb257b44572.png",
    text: "Photoshop",
  },
];
function Features() {
  return (
    <section className="features">
      <h3 className="headline">{headline}</h3>
      {featuresData.map((item) => (
        <FeaturesRow key={item.id} image={item.image} text={item.text} />
      ))}
    </section>
  );
}
export default Features;
