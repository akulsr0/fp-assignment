import React, { useRef, useState } from "react";
import { useLongPress } from "use-long-press";
import { openUrl } from "../../helper";
import styles from "../../styles/CardGroup.module.css";

function HC3Card(props) {
  const { data } = props;

  const [showCard, setShowCard] = useState(true);

  const cardSidebarRef = useRef(null);
  const cardBodyRef = useRef(null);

  const longPress = useLongPress(() => {
    const sidebar = cardSidebarRef.current;
    const body = cardBodyRef.current;
    const isSideBarOpen =
      sidebar.style.display === "flex" && body.style.left === "114px";
    if (isSideBarOpen) {
      sidebar.style.display = "none";
      body.style.left = "0";
    } else {
      sidebar.style.display = "flex";
      body.style.left = "114px";
    }
  });

  const showCardLS = localStorage.getItem("showHC3Card");
  if (!showCard || showCardLS) return null;

  return (
    <div className={styles.hc3Wrapper}>
      {data.cards.map((card, idx) => (
        <div
          key={`${card.name}-${idx}`}
          className={styles.hc3Card}
          {...longPress()}
        >
          <div className={styles.cardSidebar} ref={cardSidebarRef}>
            <div onClick={() => setShowCard(false)}>
              <img width={17} src="/bell.svg" alt="bell" />
              <span>remind later</span>
            </div>
            <div
              onClick={() => {
                localStorage.setItem("showHC3Card", false);
                setShowCard(false);
              }}
            >
              <img width={17} src="/x-circle.svg" alt="bell" />
              <span>dismiss now</span>
            </div>
          </div>
          <div
            ref={cardBodyRef}
            className={styles.cardBody}
            style={{
              backgroundImage: `url(${card["bg_image"]["image_url"]})`,
              aspectRatio: card["bg_image"]["aspect_ratio"],
            }}
          >
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <div className={styles.actionbar}>
              {card.cta.map((btn, idx) => (
                <button
                  key={`${btn.name}-${idx}`}
                  style={{
                    backgroundColor: btn["bg_color"],
                    color: btn["text_color"],
                  }}
                  onClick={() => {
                    openUrl(btn.url);
                  }}
                >
                  {btn.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HC3Card;
