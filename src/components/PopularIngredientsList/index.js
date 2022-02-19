import React from "react";
import "./style.css";
const PopularIngredientsList = (props) => {
  const { title, img } = props.PiItem;
  return (
    <>
      <section className="Pil">
        <article className="pil-card">
          <img src={img} alt={title} className="pil-photo" />
          <div>
            <h4>{title}</h4>
          </div>
        </article>
      </section>
    </>
  );
};

export default PopularIngredientsList;
