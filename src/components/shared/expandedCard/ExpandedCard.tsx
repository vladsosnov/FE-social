import type { FC } from "react";
import styles from "./expandedCard.module.css";

export const ExpandedCard: FC = () => {
  const expandedCardActions = [
    {
      id: "edit",
      name: "Edit",
      icon: "edit",
    },
    {
      id: "add",
      name: "Adit",
      icon: "add",
    },
    {
      id: "post",
      name: "Start a post",
      icon: "",
    },
  ];

  return (
    <>
      <div className={styles.expandedCardHeader}>
        <h2 className={styles.expandedCardHeaderTitle}>Experience</h2>
        <div className={styles.expandedCardHeaderActions}>
          <ul>
            {expandedCardActions.map((action) => (
              <li key={action.id}>
                <div>{action.name}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.expandedCardContent}>
        <ul className={styles.expandedCardContentItems}>
          <li className={styles.expandedCardContentItem}>GlobalLogic1</li>
          <li className={styles.expandedCardContentItem}>GlobalLogic2</li>
          <li className={styles.expandedCardContentItem}>GlobalLogic3</li>
          <li className={styles.expandedCardContentItem}>GlobalLogic4</li>
        </ul>
        <div className={styles.expandedCardContentFooter}>
          <a href="/" className={styles.expandedCardContentFooterLink}>
            See all 15 skills
          </a>
        </div>
      </div>
    </>
  );
};
