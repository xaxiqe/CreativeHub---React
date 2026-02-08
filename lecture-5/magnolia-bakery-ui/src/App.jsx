import Header from "./Components/Header/Header";
import Hero from "./Components/Header/Hero/Hero";
import Products from "./Components/Products/Products";
import NewProducts from "./Components/NewProducts/NewProducts";
import Delivery from "./Components/DeliveryOptions/Delivery";
import Catering from "./Components/CateringOffers/Catering";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Products />
      <NewProducts />
      <Delivery />
      <Catering />
    </div>
  );
}

export default App;
