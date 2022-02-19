import React from "react";
import "./style.css";
const RandomDrinksList = (props) => {
  const { title, img } = props.RdItem;
  return (
    <section className="Randomdrinklist-section">
      <article className="Rdl-card">
        <img src={img} alt={title} className="Rdl-photo" />
        <div>
          <h4>{title}</h4>
        </div>
      </article>
    </section>
  );
};

export default RandomDrinksList;
