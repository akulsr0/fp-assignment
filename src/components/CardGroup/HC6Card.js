import React from "react";
import { openUrl } from "../../helper";
import styles from "../../styles/CardGroup.module.css";

function HC6Card(props) {
  const { data } = props;

  const isScrollable = data["is_scrollable"];

  return (
    <div
      className={styles.hc6Wrapper}
      style={{ overflow: isScrollable ? "scroll" : "unset" }}
    >
      {data.cards.map((card, idx) => (
        <div
          key={`${card.name}-${idx}`}
          className={styles.hc6Card}
          onClick={() => {
            openUrl(card.url);
          }}
        >
          <img
            width={30}
            height={30}
            src={card.icon.image_url}
            alt="hc6-icon"
          />
          <span>{card.title}</span>
        </div>
      ))}
    </div>
  );
}

export default HC6Card;
