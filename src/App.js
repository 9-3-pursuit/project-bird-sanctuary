// import React from 'react';
import birdData from './data/birds';
import BirdCard from "./components/BirdCard";
import { useState } from "react";
import Cart from "./components/Cart";
import Checkout from './components/Checkout';
import './App.css';




function App () {
  // const [birds, setBirds] = useState(birdData)

  const[cart, setCart] = useState([]);

  let [user, setUser] = useState({
    firstName:"",
    lastName:"",
    zip:"",
    email:""
  });

  function handleTextChange(){}

  function handleDelete(i){
    cart.splice(i, 1)
    setCart([...cart]);
  }

  function handleSubmit(){
    alert("You have adopted birds. Thank you!");

    setCart([]);
    setUser({
      firstName: "",
      lastName: "",
      zipCode: "",
      email: ""
    })

  }

  function handleBirdCardClick(bird){
    setCart([...cart, bird])

  }

  
  
  return (
    <div>
      
        <div className='cart'>
      <Checkout  user ={user} handleTextChange={handleTextChange} handleSubmit={handleSubmit}/>
    
      <Cart cart={cart} handleDelete={handleDelete}/>

      </div>
    

    <div className='birds'>
      {birdData.map((bird, i)=> {
        return(
          <BirdCard
          key={bird.name}
          bird={bird}
          handleBirdCardClick={handleBirdCardClick}/>

        );
      })};
    
    
    </div>
    </div>
  );
};

export default App;
