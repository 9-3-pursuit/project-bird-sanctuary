import React from "react";
import { v4 as uuid } from "uuid";
import bonusItems from "../data/bonusItems";
import "./Cart.css";


const Cart = ({ cart, handleDelete}) => {
  const totalPrice = cart.reduce((a, b) => a + b.amount, 0);
  const discount = cart.length >= 3 ? totalPrice * 0.1 : 0;
  const total = totalPrice - discount;
  console.log('Cart', cart)

  let bonuses = [];
  if (total >= 100 && total < 300) {
    bonuses.push(bonusItems[0]);
  } else if (total >= 300 && total < 500) {
    bonuses.push(bonusItems[0], bonusItems[1]);
  } else if (total >= 500 && total < 1000) {
    bonuses.push(bonusItems[0], bonusItems[1], bonusItems[2]);
  } else if (total >= 1000) {
    bonuses.push(bonusItems[0], bonusItems[1], bonusItems[2], bonusItems[3]);
  }

  return (
    <div className="Cart">
      <h1 className='Cart1'>Cart</h1>
      <ol>
        {cart.map((bird) => (
          <li key={bird.id}>
            {bird.name} ${bird.amount}
              <button className="delete_button" onClick={() => handleDelete(bird.id)}>x</button>
          </li>
        ))}
      </ol>
      <div>
        {cart.length >= 3 ? (
          <p>Discount: 10%</p>
        ) : (
          <p>Discount: 0%</p>
        )}
        <p>Cart: {cart.length} </p>
        <h4>Total price: ${total}</h4>
      </div>
      {bonuses.length > 0 && (
        <div>
          <h5>Bonus items:</h5>
          <ul>
            {bonuses.map((bonus) => (
              <li key={uuid()}>{bonus}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cart;






  










