import React from "react";

function Article({ redspan, image, name, price }) {
  return (
    <article className="article">
      <span className="article span">{redspan}</span>

      <img src={image} alt={name} />

      <p className="articlename">The {name} bag</p>

      <h4 className="articleprice">€{price},-</h4>
    </article>
  );
}
export default Article;
