// import Checkout from "./Components/Checkout.js"
import { useState } from "react";
import BirdsDisplay from "./BirdsDisplay";
import { Checkout } from "./Checkout";

//adoptCart = the collection of birds based on UserClick from birdsdisplay page.

export default function Cart({ cart, setCart }) {
  // creates state

  // compile the total based on bird info.
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].amount;
  }
  let discount = 0;
  for (let i = 0; i < cart.length; i++) {
    if (cart.length <= 2) {
      discount = 0;
    } else {
      discount = total * 0.1;
    }
  }

  const cartInfo = cart.map((cartItems) => {
    return (
      <li key={cartItems.id}>
        {cartItems.name}: ${cartItems.amount}
      </li>
    );
  });

  return (
    <div className="Cart">
      <h1>Cart</h1>
      <h4>Discount:${discount} </h4>
      <h4>Total:${total} </h4>
      <ol>{cartInfo}</ol>
    </div>
  );
}

// I need the discount to be subtracted from the total upon check out. not sure how to get that running.
