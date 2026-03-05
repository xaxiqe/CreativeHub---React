import { NavLink } from "react-router-dom";

function Navbar() {
  const linkStyles = ({ isActive }) =>
    isActive
      ? "text-blue-500 font-semibold "
      : "text-gray-600 hover:text-black";
  return (
    <nav className="container text-2xl flex justify-around mx-auto py-8 gap-2">
      <NavLink className={linkStyles} to="/">
        Cart
      </NavLink>
      <NavLink className={linkStyles} to="/products">
        Products
      </NavLink>
      <NavLink className={linkStyles} to="/expenses">
        Expenses
      </NavLink>
      <NavLink className={linkStyles} to="/counter">
        Counter
      </NavLink>
      <NavLink className={linkStyles} to="/tasks">
        Tasks
      </NavLink>
    </nav>
  );
}

export default Navbar;
