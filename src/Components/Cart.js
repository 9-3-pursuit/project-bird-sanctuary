import React from "react";
import bonusItems from "../data/bonusItems";





export default function Cart({ cart, setCart }) {

  const getDiscount = (cart) => {
    return cart.length >= 3 ? 0.1 : 0;
  };

  const getCartTotal = (cart) => {
    const total = cart.reduce((acc, curr) => acc + curr.amount, 0);
    const amountToSubtract = getDiscount(cart) * total;
    return total - amountToSubtract;
  };

  function removeFromCart(birdToRemove) {
    const birdIndex = cart.findIndex((bird) => bird.id === birdToRemove.id);
    if (birdIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(birdIndex, 1);
      setCart(updatedCart);
    }
  }
  

  const getBonuses = (cart) => {
    const total = getCartTotal(cart);
    let bonuses = [];
    if (total >= 1000) {
      bonuses = bonusItems;
    } else if (total >= 500) {
      bonuses = bonusItems.slice(0, 3);
    } else if (total >= 300) {
      bonuses = bonusItems.slice(0, 2);
    } else if (total >= 100) {
      bonuses = bonusItems.slice(0, 1);
    }
    return bonuses;
  };

  const bonusesEarned = getBonuses(cart).map((bonusStr, i) => (
    <li key={i}>{bonusStr}</li>
  ));

  const cartItems = cart.map((cartItem) => {
    return (
      <li key={cartItem.id}>
        {cartItem.name}: ${parseInt(cartItem.amount)}
        <button onClick={() => removeFromCart(cartItem)} type="submit">Delete</button>
      </li>
    );
  });
  

  return (
    <div className="aside Cart">
      <aside>
        <h4>🐦➰ Cart ➰🐦</h4>
        <p>Discount: {getDiscount(cart) * 100}%</p>
        <h4>Total: ${getCartTotal(cart)}</h4>
        <ol>{cartItems}</ol>
        <ul>{bonusesEarned}</ul>
      </aside>
    </div>
  );
}

















