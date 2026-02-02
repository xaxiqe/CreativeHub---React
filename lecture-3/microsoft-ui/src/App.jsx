import Header from "./components/Header/Header";
import Hero from "./components/Header/Hero/Hero";
import PromoLinks from "./components/Header/PromoLinks/PromoLinks";
import Card from "./components/Cards/Card";
import Slider from "./components/Slider/Slider";
import { cardData1, cardData2 } from "./components/Cards/cardData";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <PromoLinks />
      <Card items={cardData1} />
      <Slider />
      <Card items={cardData2} />
      <Footer />
    </>
  );
}

export default App;
