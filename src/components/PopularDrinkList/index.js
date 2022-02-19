import React from "react";
import "./style.css";
const PopularDrinkList = (props) => {
  const { title, img } = props.menuItem;
  return (
    <section className="Pdl-section">
      <article className="Pdl-card">
        <img src={img} alt={title} className="Pdl-photo" />
        <div>
          <h4>{title}</h4>
        </div>
      </article>
    </section>
  );
};

export default PopularDrinkList;
