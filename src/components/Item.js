import React, { useState } from "react";

function Item({ name, category }) {
  const [toggleAdd, setToAdd] = useState(false)
  // console.log({toggleAdd, setToAdd})
  const inCart = toggleAdd ? "remove" : "add"

  function handleAddCart() {
    setToAdd(!toggleAdd)
  }

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart} onClick={handleAddCart}>{toggleAdd ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
