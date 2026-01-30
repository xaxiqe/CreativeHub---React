import NavLink from "./NavLink";
import "./header.css";
function Header() {
  const navItems = [
    "Creativity & Design",
    "PDF & E-signatures",
    "Marketing & Comerce",
    "Lerarn & Support",
  ];
  return (
    <>
      <NavLink title="Adobe" items={navItems} />
    </>
  );
}
export default Header;
