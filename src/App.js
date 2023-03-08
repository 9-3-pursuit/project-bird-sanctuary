import React from "react";
import birdData from "./data/birds.js";
// import BirdD from "./Components/BirdsDisplay.js";
import { useState } from "react";
import "./App.css";
import Checkout from "./Components/Checkout.js";
import Cart from "./Components/Cart.js";
import bonusItems from "./data/bonusItems.js";
import BirdsDisplay from "./Components/BirdsDisplay.js";
import BirdCard from "./Components/BirdCard.js";

function App() {
  const [cart, setCart] = useState([
    {
      img: "https://cdn.pixabay.com/photo/2020/06/03/13/47/bird-5255017_960_720.jpg",
      name: "Shoebill",
      amount: 100,
      id: 444,
    },
    {
      img: "https://i.imgur.com/YHApS55.png",
      name: "King Vulture",
      amount: 500,
      id: 1010,
    },
    {
      img: "https://i.imgur.com/YHApS55.png",
      name: "King Vulture",
      amount: 500,
      id: 1010,
    },
  ]);
  //addToCart accepts a bird object and uses setcart to update the cart
  function addToCart(birdToAdd) {
    setCart([...cart, birdToAdd]);
  }
  

  //  } setCart(updatedCart)
  // const bonuses = bonusItems
  // console.log(bonuses)
  // const bonuses = bonusItems;
  // const keys = bonuses.keys();

  // for (let key of keys) {
  //   console.log(key)
  const birdCards = birdData.map((bird)=> {
  return ( 
    <li key={bird.id}>
      <BirdCard bird={bird} addToCart={addToCart}/>
    </li>
    )
  })



  return (
   
    <div className="App">
      <header>

      </header>
        <h1>➰🌼🐦➰🌸🐦 ➰Bird Sanctuary ➰🐦🌸➰🌼🐦➰</h1>
        <div className="main-grid">
          <Cart bonusItems={bonusItems} cart={cart} addToCart={addToCart} />
          <Checkout />
          <ul className="bird-cards">
            {birdCards}
          </ul>
        </div>
      </div>
  );
}
export default App;










