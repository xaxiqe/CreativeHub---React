import FooterColumn from "./FooterColumns";
import "./footer.css";

const footerData = [
  {
    id: "1",
    heading: "For individuals & small business",
    links: [
      "Creative AI",
      "Photography",
      "Design and illustration",
      "Video and animation",
      "PDF",
      "3D",
      "Elements Family",
      "Stock images and video",
      "View all products",
    ],
  },
  {
    id: "2",
    heading: "For medium & large business",
    links: [
      "Personalization at scale",
      "Content supply chain",
      "Unified customer experience",
      "Creativity and production",
      "B2B GTM orchestration",
      "View all products",
    ],
  },
  {
    id: "3",
    heading: "For organizations",
    links: ["Education", "Nonprofits", "Government"],
  },
  {
    id: "4",
    heading: "Support",
    links: [
      "Help Center",
      "Download and install",
      "Adobe Community",
      "Adobe Learn",
      "Medium and large business support",
    ],
  },
  {
    id: "5",
    heading: "Contact",
    links: ["Chat with sales", "Request information"],
  },
  {
    id: "6",
    heading: "Adobe",
    links: [
      "Log into your account",
      "About",
      "Careers",
      "Events",
      "Newsroom",
      "Corporate responsibility",
      "Investor Relations",
      "Supply chain",
      "Trust Center",
      "Integrity",
      "Adobe for All",
      "Adobe Blog",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-inner" aria-label="Footer">
        {footerData.map((data) => (
          <FooterColumn
            key={data.id}
            heading={data.heading}
            links={data.links}
          />
        ))}
      </nav>
    </footer>
  );
}
