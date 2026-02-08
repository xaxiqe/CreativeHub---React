function NavList({ title, items }) {
  return (
    <nav
      aria-label="Main navigation"
      className="container mx-auto py-6 px-6 text-red"
    >
      <ul className="flex gap-6 justify-center ">
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
