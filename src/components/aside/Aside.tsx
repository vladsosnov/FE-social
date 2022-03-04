import { UserAvatar } from "components/shared";
import { Footer } from "components/footer";
import { ArrowRightIcon, PlusIcon } from "assets/icons";
import type { FC } from "react";
import type { User } from "types/User";
import styles from "./aside.module.css";

interface AsideProps {
  user: User | null;
}

export const Aside: FC<AsideProps> = ({ user }) => {
  const recommendations = [
    {
      id: 0,
      picture: "",
      name: "Bill Gates",
      position: "Co-chair, Bill & Melinda Gates Foundation",
    },
    {
      id: 1,
      picture: "",
      name: "Nike",
      position: "Company • Sporting Goods",
    },
    {
      id: 2,
      picture: "",
      name: "GitHub",
      position: "Company • Computer Software",
    },
  ];

  return (
    <div className={styles.aside}>
      <div className={styles.asideFeed}>
        <h2 className={styles.asideFeedTitle}>Add to your feed</h2>
        <ul className={styles.asideFeedRecommendations}>
          {recommendations.map((recommendation) => (
            <li
              key={recommendation.id}
              className={styles.asideFeedRecommendation}
            >
              <a href="/" className={styles.asideFeedRecommendationAvatar}>
                <UserAvatar
                  picture={recommendation.picture}
                  username={recommendation.name}
                  size="m"
                />
              </a>
              <div className={styles.asideFeedRecommendationDescription}>
                <div className={styles.asideFeedRecommendationHead}>
                  <a href="/" className={styles.asideFeedRecommendationLink}>
                    <p className={styles.asideFeedRecommendationName}>
                      {recommendation.name}
                    </p>
                    <p className={styles.asideFeedRecommendationSubText}>
                      {recommendation.position}
                    </p>
                  </a>
                </div>
                <button className={styles.asideFeedRecommendationFollowButton}>
                  Follow
                  <PlusIcon
                    customClassName={styles.asideFeedRecommendationFollowIcon}
                    width={21}
                  />
                </button>
              </div>
            </li>
          ))}
        </ul>
        <a href="/" className={styles.asideFeedViewAll}>
          View all recommendation
          <ArrowRightIcon
            customClassName={styles.asideFeedViewAllIcon}
            width={21}
          />
        </a>
      </div>
      <Footer />
    </div>
  );
};
