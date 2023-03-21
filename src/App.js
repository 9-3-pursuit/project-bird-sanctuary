import React from "react";
import { useState } from "react";
import "./App.css";
import Checkout from "./Components/Checkout.js";
import Cart from "./Components/Cart.js";
import bonusItems from "./data/bonusItems.js";
import BirdsDisplay from "./Components/BirdsDisplay.js";


function App() {
  const [cart, setCart] = useState([]);
  //addToCart accepts a bird object and uses setcart to update the cart
  function addToCart(birdToAdd) {
    setCart([...cart, birdToAdd]);
  }
  function resetCart() {
    alert("You have adopted birds. Thank you!")
    setCart([]);
  }


 



  return (
   
    <div className="App">
      <header>

      </header>
        <h1>➰🐦🌸🐦 ➰Bird Sanctuary ➰🐦🌼🐦➰</h1>
        <div className="main-grid">
          <BirdsDisplay addToCart={addToCart} />
          <Cart bonusItems={bonusItems} cart={cart} addToCart={addToCart} setCart={setCart} />
          <Checkout resetCart={resetCart}/>
         
        </div>
      </div>
  );
}
export default App;










