import React from "react";
import { useState } from "react";
import birdData from "../data/birds";
export default function Cart({addToCart}) {
    console.log(addToCart)
  return (
    <div className="Cart">
      <aside>
        <h4>Cart</h4>
        <h5>Discount: 0%</h5>
        <h5>Total: $1000</h5>
        <ol>
          <li>Shoebill $100</li>
          <button type="button">Delete</button>
          <li>Turaco $400.00</li>
          <li>tweetr $10000.00</li>
        </ol>
        <ul>
          <p>Your donations have qualified you for the following items</p>
          <li>Stickers</li>
          <li>Background for your computer</li>
          <li>Tote bag</li>
        </ul>
      </aside>
    </div>
  );
}
