import Header from "./Components/Header/Header";
import Hero from "./Components/Header/Hero/Hero";
import Products from "./Components/Products/Products";
import NewProducts from "./Components/NewProducts/NewProducts";
import Delivery from "./Components/DeliveryOptions/Delivery";
import Catering from "./Components/CateringOffers/Catering";
import Favorites from "./Components/Favorites/Favorites";
import Faqs from "./Components/Faqs/Faqs";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Favorites />
      <Products />
      <NewProducts />
      <Delivery />
      <Catering />
      <Faqs />
    </>
  );
}

export default App;
