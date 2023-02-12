import React from "react";
import { useState } from "react";
//import birdData from "./data/birds";
import Cart from "./Components/Cart";
//import Checkout from "./Components/Checkout";
import BirdCard from "./Components/BirdCard"; // this will hold the state of cart
//import bonusItems from "./Components/BonusItems";
//import bonusItems from "../data/bonusItems";

  // const [bird, setBird] = useState('');

function App () {
  const [myCart, setMyCart] = useState({total: 0, discount: false, adopted:[]});

  return (
    <div>
      <main>
      <Cart myCart={myCart}/>
       {/* <Checkout/>  */}
      <BirdCard myCart={myCart} setMyCart={setMyCart}/>
      </main>
    </div>
  );
};

export default App;
