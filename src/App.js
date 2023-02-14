import React from "react";
import BirdCard from "./components/BirdCard"
import Cart from "./components/Cart"
import Checkout from "./components/Checkout"
import { useState } from "react";

function App () {
  const [cart4Bird, setMyCart] = useState({total:0, discount:false, adopted:[]})
  return (
    <div>
       <main>
        <div>
          <div className="leftaside">
          <Cart cart4Bird={cart4Bird} setMyCart={setMyCart}/>
          </div>
          <div>
          <Checkout cart4Bird={cart4Bird} setMyCart={setMyCart}/>  
         </div>
         </div>
         <BirdCard cart4Bird ={cart4Bird} setMyCart={setMyCart}/>
         </main>
         </div>
   
  );
};

export default App;
