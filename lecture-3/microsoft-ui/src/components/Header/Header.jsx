const Logo = "https://uhf.microsoft.com/images/microsoft/RE1Mu3b.png";
import "./header.css";

function Header() {
  const leftItems = [
    "Microsoft 365",
    "Teams",
    "Copilot",
    "Windows",
    "Surface",
    "Xbox",
    "Deals",
    "Small Business",
    "Support",
  ];

  const rightItems = ["All Microsoft", "Search", "Cart", "Sign in"];

  return (
    <header className="header">
      <nav className="nav" aria-label="Main navigation">
        <div className="nav-left">
          <img src={Logo} alt="Microsoft" className="nav-logo" />

          <ul className="nav-list">
            {leftItems.map((item) => (
              <li key={item} className="nav-item">
                <a href="#" className="nav-link">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ul className="nav-list nav-right">
          {rightItems.map((item) => (
            <li key={item} className="nav-item">
              <a href="#" className="nav-link">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
