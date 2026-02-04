import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Main from "./components/Main";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Main />
      <Aside />
      <Footer />
      <Card active />
      <Card active={false} />
    </>
  );
}
export default App;
