import React from "react";
import { openUrl } from "../../helper";
import styles from "../../styles/CardGroup.module.css";

function HC1Card(props) {
  const { data } = props;

  const isScrollable = data["is_scrollable"];

  return (
    <div
      className={styles.hc1Wrapper}
      style={{ overflow: isScrollable ? "scroll" : "hidden" }}
    >
      {data.cards.map((card, idx) => (
        <div
          key={`${card.name}-${idx}`}
          className={styles.hc1Card}
          style={{ backgroundColor: data["bg_color"] }}
          onClick={() => {
            openUrl(card.url);
          }}
        >
          <img
            width={30}
            height={30}
            src={card.icon["image_url"]}
            alt="hc1-icon"
          />
          <div>
            <span>{card.title}</span>
            <span>{card.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HC1Card;
