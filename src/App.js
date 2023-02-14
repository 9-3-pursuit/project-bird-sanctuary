import React from "react";
import { useState } from "react";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import BirdCard from "./Components/BirdCard"; // this will hold the state of cart


function App () {
  const [myCart, setMyCart] = useState({total: 0, discount: false, adopted:[]});

  return (
    <main>
        <div>
          <div className='leftAside'>
            <Cart myCart={myCart} setMyCart = {setMyCart}/>
          </div>
          <div className='leftAside'>
            <Checkout myCart={myCart} setMyCart={setMyCart}/> 
          </div>
        </div>
        <div className='rightAside'>
          <BirdCard myCart={myCart} setMyCart={setMyCart}/>
        </div>
      </main>
  );
};

export default App;
