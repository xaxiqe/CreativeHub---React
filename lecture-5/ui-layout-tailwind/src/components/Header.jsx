import NavList from "./NavList";

function Header() {
  return (
    <header>
      <NavList
        title="SOFTGRAY"
        items={["Products", "About", "Services", "Jobs", "Contacts"]}
      />
    </header>
  );
}

export default Header;
