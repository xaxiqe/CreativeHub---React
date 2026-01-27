function NavList(props) {
  return (
    <>
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "16px",
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        <li>
          <strong>{props.title}</strong>
        </li>
        <li>{props.nav1}</li>
        <li>{props.nav2}</li>
        <li>{props.nav3}</li>
        <li>{props.nav4}</li>
        <li>{props.nav5}</li>
      </ul>
    </>
  );
}

function Header() {
  return (
    <NavList
      title="SOFTGRAY"
      nav1="Products"
      nav2="About"
      nav3="Services"
      nav4="Jobs"
      nav5="Contacts"
    />
  );
}
export default Header;
