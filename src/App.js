import React from "react";

import { useState } from "react";
import BirdCards from "./components/BirdCards";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";






function App () {

  const [cart, setMyCart] = useState({total: 0, discount: false, adopted:[]}); 
  

  return (
    <div>
      <main>
         <div>
            <div className= "leftaside">
              <Cart cart={cart} setMyCart={ setMyCart} />
            </div>
            <div  className= "leftaside">
              <Checkout cart={cart} setMyCart={ setMyCart}/> 
            </div>
         </div>
         <BirdCards cart={cart} setMyCart={setMyCart} />
      </main>
    </div>
  );
};

export default App;
