import React from "react";
import BirdCard from "./Components/BirdCard";
import Cart from "./Components/Cart";
// import bonusItems from "./data/bonusItems";
import { useState } from "react";
import birdData from "./data/birds";
import Checkout from "./Components/Checkout";

export default function App () {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discount, setDiscount] = useState(0)
  const [bonusItemList, setBonusItemList] = useState([])
  
  // reset cart
  function clearCart () {
    setCart([])
    setTotalPrice(0)
    setDiscount(0)
    setBonusItemList([])
  };

  // click bird, add to cart
  function clickBird (bird) {
    setTotalPrice(totalPrice + bird.amount)
    setCart([...cart, bird])
  };

  //
  function removeBird (bird, index) {
    const foundBird = cart.find(bird2 => bird2.id === bird.id);
  const newCartPage = [...cart]
  newCartPage.splice(index, 1);
  setCart(newCartPage);
  setTotalPrice(totalPrice - foundBird.amount)
  }



  return (
    <div className="card">
      <BirdCard clickBird={clickBird} birdData={birdData} />
      <Checkout clearCart={clearCart}/>
     <Cart cart={cart} totalPrice={totalPrice} removeBird={removeBird}/>
    </div>
  );
};


