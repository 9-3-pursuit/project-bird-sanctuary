
import React from "react";
import BirdCard from "./Components/BirdCard"
import Cart from "./Components/Cart"
import Checkout from "./Components/Checkout"
import { useState } from "react";

function App () {
  const [cart, setMyCart] = useState({total:0, discount:false, adopted:[]})
  return (
    <div>
       <main className="container">
        <div>
          <div className="leftaside">
          <Cart cart={cart} setMyCart={setMyCart}/>
          </div>
          <div>
          <Checkout cart={cart} setMyCart={setMyCart}/>  
         </div>
         </div>
         <BirdCard cart ={cart} setMyCart={setMyCart}/>
         </main>
         </div>
   
  );
};

export default App;
