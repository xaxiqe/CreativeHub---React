import ServicesCard from "./ServiceCard";
import "./services.css";

const cardData = [
  {
    id: 1,
    title: "Save 40% on Creative Pro",
    text: "Get Photosop, Ilustrator,and more.End Feb 2nd, Terms apply!*",
    link: "Save now!",
    image:
      "https://www.adobe.com/homepage/fragments/loggedout/prmr-yt-cci-bts-cct-2026/global/cci/media_1269f4522d4204b1f392f30b54754e0b27a972742.png?width=2000&format=webply&optimize=medium",
  },
  {
    id: 2,
    title: "Now you can edit with Photoshop in ChatGPT.",
    text: "Get Photoshop, Ilustrator,and more.End Feb 2nd, Terms apply!*",
    link: "Save now!",
    image:
      "https://www.adobe.com/homepage/fragments/loggedout/prmr-yt-cci-bts-cct-2026/global/ste/media_12a005c0061d69ffbdbe2624b2b997f6b2b5b021e.png?width=2000&format=webply&optimize=medium",
  },
  {
    id: 3,
    title: "Save 40% on Creative Pro",
    text: "Get Photoshop, Ilustrator,and more.End Feb 2nd, Terms apply!*",
    link: "Save now!",
    title2: "Now you can edit with Photoshop in ChatGPT.",
    text2: "Get Photoshop, Ilustrator,and more.End Feb 2nd, Terms apply!*",
  },
  {
    id: 4,
    title: "Save 40% on Creative Pro",
    text: "Pros depend on Premiere, After Effects, and cutting-edge creative AI.",
    link: "Save now!",
    image:
      "https://www.adobe.com/homepage/fragments/loggedout/prmr-yt-cci-bts-cct-2026/global/cct/media_1e46b46a484b57756bff15c465bf2664a14b82cc8.png?width=2000&format=webply&optimize=medium",
  },
  {
    id: 5,
    title: "Save 40% on Creative Pro",
    text: "Get Photoshop, Ilustrator,and more.End Feb 2nd, Terms apply!*",
    link: "Save now!",
    image:
      "https://www.adobe.com/homepage/fragments/loggedout/pods/max-2025/media_10432946851733b78f7386e2fd3e268a70a9f5847.png?width=2000&format=webply&optimize=medium",
  },
  {
    id: 6,
    title: "In The News",
    text: "Pros depend on Premiere, After Effects, and cutting-edge creative AI.",
    link: "Save now!",
  },
];
function Services() {
  return (
    <section className="cards-section">
      <div className="cards-grid">
        {cardData.map((card) => (
          <ServicesCard
            key={card.id}
            id={card.id}
            title={card.title}
            text={card.text}
            link={card.link}
            image={card.image}
            title2={card.title2}
            text2={card.text2}
          />
        ))}
      </div>
    </section>
  );
}
export default Services;
