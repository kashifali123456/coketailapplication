import React from "react";
import "./style.css";
const LatestDrinksList = (props) => {
  const { title, img } = props.latestItem;
  return (
    <section className="LatestDrinksList-section">
      <article className="Latestdrink-card">
        <img src={img} alt={title} className="latest-photo" />
        <div>
          <h4>{title}</h4>
        </div>
      </article>
    </section>
  );
};

export default LatestDrinksList;
