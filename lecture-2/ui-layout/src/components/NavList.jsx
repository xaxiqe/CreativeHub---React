function NavList({ title, items }) {
  return (
    <nav aria-label="Main navigation">
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
          <strong>{title}</strong>
        </li>

        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </nav>
  );
}

export default NavList;
