import React from "react";
import { openUrl } from "../../helper";
import styles from "../../styles/CardGroup.module.css";

function HC9Card(props) {
  const { data } = props;

  return (
    <div className={styles.hc9Wrapper}>
      {data.cards.map((card, idx) => (
        <div
          key={`${card.name}-${idx}`}
          className={styles.hc9Card}
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

export default HC9Card;
