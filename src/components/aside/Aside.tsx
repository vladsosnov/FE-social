import { UserAvatar } from "components/shared";
import { Footer } from "components/footer";
import { ArrowRightIcon, PlusIcon } from "assets/icons";
import type { FC } from "react";
import type { Recommendations, User } from "types/User";
import styles from "./aside.module.css";

interface AsideProps {
  user: User | null;
  recommendations: Recommendations[];
}

export const Aside: FC<AsideProps> = ({ user, recommendations }) => {
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
                  picture={recommendation.profilePicture}
                  username={recommendation.username}
                  size="m"
                />
              </a>
              <div className={styles.asideFeedRecommendationDescription}>
                <div className={styles.asideFeedRecommendationHead}>
                  <a href="/" className={styles.asideFeedRecommendationLink}>
                    <p className={styles.asideFeedRecommendationName}>
                      {recommendation.username}
                    </p>
                    <p className={styles.asideFeedRecommendationSubText}>
                      {recommendation.position}
                    </p>
                  </a>
                </div>
                <button className={styles.asideFeedRecommendationFollowBtn}>
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
