import React from "react";
import bonusItems from "../data/bonusItems";

// import { useState } from "react";
// import birdData from "../data/birds";

function getCartTotal(cart) {
  let total = 0;
  for (let bird of cart) {
    total += bird.amount;
  }
  const amountToSubtract = getDiscount(cart) * total;
  return total - amountToSubtract;
}

function getDiscount(cart) {
  if (cart.length >= 3) {
    return 0.1;
  } else {
    return 0;
  }
}

function addBonuses(total, bonusItems, {keys}) {
  const bonuses = bonusItems.map((bonus) => {
    if (total >= 100 && total) {
        return( bonusItems[0]);
      } else if (total >= 300) {
        return (bonusItems[0], bonusItems[1]);
      } else if (total >= 500) {
        return( bonusItems[0], bonusItems[1], bonusItems[2]);
      } else if (total > 1000) {
          return bonusItems;
      }
      return null
     
    })
   
  
  
    return (
        <li key={keys}>{bonuses}</li>
    )
  
  }
  
  
    


export default function Cart({ cart }) {
  const cartItem = cart.map((birdToAdd) => {
    return (
      <li key={birdToAdd.id}>
        {birdToAdd.name}: ${parseInt(birdToAdd.amount)}
      </li>
    );
  });

  return (
    <div className="Cart">
      <aside>
        <h4>Cart</h4>
        <p>Discount: {getDiscount(cart) * 100}%</p>
        <h4>Total: ${getCartTotal(cart)}</h4>
        <ol>
          {cartItem}
          {/* <button type="button">Delete</button> */}
        </ol>

        <ul>
          <p>Your donations have qualified you for the following items</p>
          {/* <li>Stickers</li>
          <li>Background for your computer</li>
          <li>Tote bag</li> */}
          {addBonuses}
        </ul>
      </aside>
    </div>
  );
}
