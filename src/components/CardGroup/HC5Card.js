import React from "react";
import { openUrl } from "../../helper";
import styles from "../../styles/CardGroup.module.css";

function HC5Card(props) {
  const { data } = props;

  const isScrollable = data["is_scrollable"];

  return (
    <div
      className={styles.hc5Wrapper}
      style={{ overflow: isScrollable ? "scroll" : "hidden" }}
    >
      {data.cards.map((card, idx) => (
        <div
          key={`${card.name}-${idx}`}
          className={styles.hc5Card}
          style={{
            backgroundImage: `url(${card["bg_image"]["image_url"]})`,
            aspectRatio: card["bg_image"]["aspect_ratio"],
          }}
          onClick={() => {
            openUrl(card.url);
          }}
        ></div>
      ))}
    </div>
  );
}

export default HC5Card;
