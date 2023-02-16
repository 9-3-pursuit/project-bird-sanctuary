import React from "react";
import birdData from "./data/birds.js";
import Birds from "./Components/BirdCards.js";
import { useState } from "react";
import "./App.css";
import Checkout from "./Components/Checkout.js";
import Cart from "./Components/Cart.js";
import bonusItems from "./data/bonusItems.js";

function App() {
  const [cart, addToCart] = useState([]);
  //addToCart accepts a bird object and uses setcart to update the cart
  function addBirdToCart(birdToAdd) {
    addToCart([...cart, birdToAdd]);
  }
  // const bonuses = bonusItems
  // console.log(bonuses)
  const bonuses = bonusItems;
  const keys = bonuses.keys();

  for (let key of keys) {
    console.log(key)
  }
  
  const birdCards = birdData.map((bird) => {
    return (
      <li key={bird.id} className="card">
        <h4>{bird.name}</h4>
        <h5>Total ${bird.amount}</h5>
        <img src={bird.img} width="200" height="200" alt="bird"></img>
        <br></br>
        <button
          onClick={() => {
            addBirdToCart(bird);
          }}
        >
          Adopt
        </button>
      </li>
    );
  });
  

  console.log(birdCards);

  return (
    <div>
      <header className="header">
        <h1>Bird Sanctuary</h1>
      </header>
      <main>
        <div className="birds">
          <Birds birdCards={birdCards} addBirdToCart={addBirdToCart} />
        </div>
        <div className="cart">
          <aside>
            <Cart cart={cart} bonusItems={bonusItems} keys={keys}/>
          </aside>
        </div>
        <div className="Checkout">
          <aside>
            <Checkout />
          </aside>
        </div>
      </main>
    </div>
  );
}
export default App;
