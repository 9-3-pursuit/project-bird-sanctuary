// import React from "react";
import  birdData  from "./data/birds";
// import BirdCards from "./Components/Birds";
import { useState } from "react";
import "./App.css"
import Checkout from "./Components/Checkout";
import Cart from "./Components/Cart";

function App () {
  const [birdsArray, getBirds]= useState(birdData);

 
 
  function CreateBirdCards(){
    const birdCards = birdsArray.map((bird) => (
      <div className="birds" >
       <ul id="grid">
          <li key={bird.id} className="card">
          <h4>{bird.name}</h4>
          <p>Total ${bird.amount}</p>
          <img
          src={bird.img}
          width="200"
          height="200"
          alt="bird"
          ></img>
          <br></br>
          <button onClick={HandleClickAdopt}>Adopt</button>
          </li>
        </ul>

     </div>
    ));
    return birdCards
    
  }
  function HandleClickAdopt(event) {
   
   const addBird = {[event.target.id]: event.target.value,}
    console.log(addBird)
  //  getBirds({birdsArray, addBird});
   
  }
         
            
          
  function addBirdToCart() {
    
    console.log(addBirdToCart)
  }
 
  

  
    
  return (
    <div>
      <header className="header">
      <h1>Bird Sanctuary</h1>
      </header>
      <main>
       <div className="birds">
         <CreateBirdCards />
          
       </div>
      <div className="cart">
        <aside>
          <Cart/>
        </aside>
      </div>
      <div className="checkout">
        <aside>
          <Checkout />
        </aside>
      </div>
      </main>
    </div>
  );
};



      

export default App;
