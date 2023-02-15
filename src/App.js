import React from "react";
import  birdData  from "./data/birds.js"
import Birds from "./Components/Birds";
import { useState } from "react";
import "./App.css";
import Checkout from "./Components/Checkout.js";
import Cart from "./Components/Cart.js";

function App() {
  const [birdsToAdopt, addToCart] = useState(birdData);
  
  function addBird () {
    const addThisBird = birdsToAdopt.map((bird) => (
     <>
      <li>{bird.name} ${bird.amount} </li>
     </> 
    ))
      return addThisBird
      
  }
  let handleClick = () => (
    addToCart(addBird)
  )
  
  
  // const [birdsArray, getBirds] = useState(birdData);
 
 
    // const [addBird, birdToCart] = useState(birdCards)
    
        //  getBirds({birdsArray, addBird});
        
        
        
    // console.log(birdCards.length)
    // function handleClickAdopt() {
    //     const addBird = "I'm the click adopt handler"
    //     console.log(addBird);
    //     // handleClickAdopt(addBird)
    // }
    // return(
    //     <div className="birds">
    //     <CreateBirdCards cards={birdCards}  onClick={handleClickAdopt}/>
    //   </div>
    // )
  // function HandleClickAdopt(event) {
  //   const addBird = { [event.target.id]: event.target.value };
  //   console.log(addBird);
  //   //  getBirds({birdsArray, addBird});
  // }

  // function addBirdToCart() {
  //   console.log(addBirdToCart);
  // }



return (
  <div>
    <header className="header">
      <h1>Bird Sanctuary</h1>
    </header>
    <main>
      <div className="birds">
        <Birds birdsArray={birdData} addBird={handleClick}/>
      </div>
      <div className="cart">
        <aside>
          <Cart birdInfo={addToCart} />
        </aside>
      </div>
      <div className="Checkout">
        <aside>
          <Checkout />
        </aside>
      </div>
    </main>
  </div>
)
};
export default App;
