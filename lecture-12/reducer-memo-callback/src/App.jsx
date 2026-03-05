import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";

import Cart from "./pages/Cart";
import ProductFilter from "./pages/ProductFilter";
import ExpenseTracker from "./pages/ExpenseTracker";

import Counter from "./pages/Counter";
import TaskManager from "./pages/TaskManager";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Cart />} />
        <Route path="/products" element={<ProductFilter />} />
        <Route path="/expenses" element={<ExpenseTracker />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/tasks" element={<TaskManager />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
