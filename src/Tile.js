import React from "react";
function Tile({ image, title, story }) {
  return (
    <>
      <section>
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p>{story}</p>
      </section>
    </>
  );
}
export default Tile;
