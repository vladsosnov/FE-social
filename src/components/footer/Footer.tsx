import "./footer.css";

export const Footer = () => {
  const footerLinks = [
    { label: "About", to: "/" },
    { label: "Privacy ", to: "/" },
    { label: "Help Center", to: "/" },
    { label: "Accessibility", to: "/" },
    { label: "Ad Choices", to: "/" },
    { label: "More", to: "/" },
  ];

  return (
    <div className="footer">
      <ul className="footerLinks">
        {footerLinks.map((footerLink) => (
          <li className="footerItem" key={footerLink.label}>
            <a href={footerLink.to} className="footerItemLink">
              {footerLink.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
