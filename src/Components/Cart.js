import React from "react";
import bonusItems from "../data/bonusItems";

// import { useState } from "react";
// import birdData from "../data/birds";




export default function Cart({cart}) {
  function getDiscount(cart) {
    if (cart.length >= 3) {
      return 0.1;
    } else {
      return 0;
    }
  }
  
  function getCartTotal(cart) {
    let total = 0;
    for (let bird of cart) {
      total += bird.amount;
    }
    const amountToSubtract = getDiscount(cart) * total;
    return total - amountToSubtract;
  }
  
  
  function removeFromCart({cart, setCart}) {
    const updatedCart = cart.filter((bird) => bird.id)
    setCart(updatedCart)
    }

  

  // function getBonusItems(cart, bonusItems) {
  //   const total = getCartTotal(cart);

  //   if (total < 100) {
  //     return [];
  //   } else if (total < 300) {
  //     return bonusItems[0];
  //   } else if (total < 500) {
  //     // return [bonusItems[0], bonusItems[1]];
  //     return bonusItems.slice(0, 2);
  //   } else if (total < 1000) {
  //     // return bonusItems[0], bounusItems[1], bonusItems[2];
  //     return bonusItems.slice(0, 3);
  //   } else {
  //     return bonusItems.slice();
  //   }

  // }

  // const bonusItems = getBonusItems(cart).map((bonusStr, i) => {
  //   return (
  //     <li key={i}>{bonusStr}</li>
  //   );
  // })







  const cartItems = cart.map((cartItem) => {
    return (
      <li key={cartItem.id}>
        {cartItem.name}: ${parseInt(cartItem.amount)}
       
      </li>
    );
  });

  return (
    <div className="aside cart">
      <aside>
        <h4>🐦➰ Cart ➰🐦</h4>
        <p>Discount: {getDiscount(cart) * 100}%</p>
        <h4>Total: ${getCartTotal(cart)}</h4>
        <ol>
          {/* {cartItems}
          <button onClick={removeFromCart(cart)} type="button">Delete</button> */}
        </ol>
        <ul>
        {bonusItems}

        </ul>



      </aside>
    </div>
  );
}

