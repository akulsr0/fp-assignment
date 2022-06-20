import React, { useEffect, useState } from "react";
import PullToRefresh from "react-simple-pull-to-refresh";
import Loading from "./components/Loading";
import CardGroup from "./components/CardGroup";

const MOCK_URL = "https://run.mocky.io/v3/fefcfbeb-5c12-4722-94ad-b8f92caad1ad";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(MOCK_URL)
      .then((res) => res.json())
      .then(({ card_groups: cardGroups }) => {
        setData(cardGroups);
      });
  }, []);

  if (!data) return <Loading />;

  function onRefresh() {
    console.log("refreshing");
    return new Promise((resolve) => {
      // Complete Refresh after 3 seconds (Mocked)
      setTimeout(resolve, 3000);
    });
  }

  return (
    <div className="App">
      <PullToRefresh isPullable onRefresh={onRefresh}>
        {data.map((cardGroup, idx) => (
          <CardGroup key={`${cardGroup.id}-${idx}`} data={cardGroup} />
        ))}
      </PullToRefresh>
    </div>
  );
}

export default App;
