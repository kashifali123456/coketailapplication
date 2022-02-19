import React from "react";
import "./style.css";
const RandomIngredientList = (props) => {
  const { title, img } = props.RItem;
  return (
    <>
      <section className="Ril">
        <article className="ril-card">
          <img src={img} alt={title} className="ril-photo" />
          <div>
            <h4>{title}</h4>
          </div>
        </article>
        <hr />
      </section>
    </>
  );
};

export default RandomIngredientList;
