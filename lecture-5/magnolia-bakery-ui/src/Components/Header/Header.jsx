import NavItems from "./NavItems";
const NavLinks = ["ORDER", "PRODUCTS", "HOURS & LOCATION ", "ABOUT US"];

function Header() {
  return (
    <div className="container mx-auto py-6">
      <NavItems title="Magnolia Bakery" items={NavLinks} />
    </div>
  );
}
export default Header;
