import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChuckApi from "./components/ChuckApi";
import JokesApi from "./components/JokesApi";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jokes" element={<JokesApi />} />
          <Route path="/chuck" element={<ChuckApi />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
