import React, { useState } from "react";

function Item({ name, category }) {
  const [isCart, setIsCart]=useState(false)
  return (
    <li className={isCart?"in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isCart?"remove":"add"} onClick={()=>setIsCart(c=>c=!c)}>{isCart?"Remove From Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;
