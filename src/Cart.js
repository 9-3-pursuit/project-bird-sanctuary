import { useState } from "react";

export default function Cart(props) {
  console.log(props);
  const cartList = props.selected.map((item) => {
    return (
      <li>
        {item.name}: ${item.amount}
      </li>
    );
  });
  let total = 0;
  props.selected.forEach((item) => {
    total += item.amount;
  });
  return (
    <section className="Cart">
      <h3>Cart</h3>
      <h4>Discount: </h4>
      <h4>Total: ${total}</h4>
      <ol className="Cart">{cartList}</ol>
      <p>Your donations have qualified you for the following items:</p>
      <ul></ul>
    </section>
  );
}
