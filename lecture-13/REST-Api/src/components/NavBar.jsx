import { NavLink } from "react-router-dom";
import cn from "../utils/cn";

function NavBar() {
  const linkStyles = ({ isActive }) =>
    cn(
      "text-2xl transition-colors",
      isActive
        ? "text-blue-500 font-semibold "
        : "text-gray-600 hover:text-black",
    );
  return (
    <nav className="container text-2xl flex justify-around mx-auto py-8 gap-2">
      <NavLink className={linkStyles} to="/">
        Home
      </NavLink>
      <NavLink className={linkStyles} to="/jokes">
        Jokes API
      </NavLink>
      <NavLink className={linkStyles} to="/chuck">
        Chuck API
      </NavLink>
    </nav>
  );
}

export default NavBar;
