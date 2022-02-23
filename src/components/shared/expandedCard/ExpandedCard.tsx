import "./expandedCard.css";

export const ExpandedCard = ({}) => {
  const expandedCardActions: any = () => {
    return [
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
  };

  return (
    <>
      <div className="expandedCardHeader">
        <h2 className="expandedCardHeaderTitle">Experience</h2>
        <div className="expandedCardHeaderActions">
          <ul>
            {expandedCardActions.map((action: any) => (
              <li>
                <div>{action.name}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="expandedCardContent">
        <ul className="expandedCardContentItems">
          <li className="expandedCardContentItem">GlobalLogic1</li>
          <li className="expandedCardContentItem">GlobalLogic2</li>
          <li className="expandedCardContentItem">GlobalLogic3</li>
          <li className="expandedCardContentItem">GlobalLogic4</li>
        </ul>
        <div className="expandedCardContentFooter">
          <a href="/" className="expandedCardContentFooterLink">
            See all 15 skills
          </a>
        </div>
      </div>
    </>
  );
};
