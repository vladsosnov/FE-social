import type { FC } from "react";
import styles from "./footer.module.css";

export const Footer: FC = () => {
  const footerLinks = [
    { label: "About", to: "/" },
    { label: "Privacy ", to: "/" },
    { label: "Help Center", to: "/" },
    { label: "Accessibility", to: "/" },
    { label: "Ad Choices", to: "/" },
    { label: "More", to: "/" },
  ];

  return (
    <div className={styles.footer}>
      <ul className={styles.footerLinks}>
        {footerLinks.map((footerLink) => (
          <li className={styles.footerItem} key={footerLink.label}>
            <a href={footerLink.to} className={styles.footerItemLink}>
              {footerLink.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
