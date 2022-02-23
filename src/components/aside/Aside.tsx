import { UserAvatar } from "components/shared";
import { Footer } from "components/footer";
import { ArrowRightIcon, PlusIcon } from "assets/icons";
import "./aside.css";

export const Aside = ({ user }: any) => {
  const recommendations = [
    {
      id: 0,
      picture: null,
      name: "Bill Gates",
      position: "Co-chair, Bill & Melinda Gates Foundation",
    },
    {
      id: 1,
      picture: null,
      name: "Nike",
      position: "Company • Sporting Goods",
    },
    {
      id: 2,
      picture: null,
      name: "GitHub",
      position: "Company • Computer Software",
    },
  ];

  return (
    <div className="aside">
      <div className="asideFeed">
        <h2 className="asideFeedTitle">Add to your feed</h2>
        <ul className="asideFeedRecommendations">
          {recommendations.map((recommendation) => (
            <li key={recommendation.id} className="asideFeedRecommendation">
              <a href="/" className="asideFeedRecommendationAvatar">
                <UserAvatar
                  picture={recommendation.picture}
                  username={recommendation.name}
                  size="medium"
                />
              </a>
              <div className="asideFeedRecommendationDescription">
                <div className="asideFeedRecommendationHead">
                  <a href="/" className="asideFeedRecommendationLink">
                    <p className="asideFeedRecommendationName">
                      {recommendation.name}
                    </p>
                    <p className="asideFeedRecommendationSubText">
                      {recommendation.position}
                    </p>
                  </a>
                </div>
                <button className="asideFeedRecommendationFollowButton">
                  Follow
                  <PlusIcon
                    customClassName="asideFeedRecommendationFollowIcon"
                    width={21}
                  />
                </button>
              </div>
            </li>
          ))}
        </ul>
        <a href="/" className="asideFeedViewAll">
          View all recommendation
          <ArrowRightIcon customClassName="asideFeedViewAllIcon" width={21} />
        </a>
      </div>
      <Footer />
    </div>
  );
};
