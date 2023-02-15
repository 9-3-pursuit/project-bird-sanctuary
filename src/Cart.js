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
  let discount = 0;
  props.selected.forEach((item) => {
    total += item.amount;
  });
  if (props.selected.length >= 3 && total > 100) {
    discount = 10;
    total *= 0.9;
    console.log(total);
  }
  return (
    <section className="Cart">
      <h2>Cart</h2>
      <h3>Discount: {discount}%</h3>

      <h4>Total: ${total}</h4>
      <ol className="Cart">{cartList}</ol>
      <p>Your donations have qualified you for the following items:</p>
      <ul></ul>
    </section>
  );
}
