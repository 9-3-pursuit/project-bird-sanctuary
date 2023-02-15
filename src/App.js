import birdData from "./data/birds";
import Cards from "./components/Cards";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import "./App.css"

import { useState } from "react";

function App () {
  const [total, setTotal] = useState(0);
  const [birdsList, setBirdsList] = useState(birdData);
  const [discount, setDiscount] = useState(0)
  const [adoptedBirdsList, setAdoptedBirdsList] = useState([]);
  

  function handleBirdAdopted(birdIndex){ 
   
    adoptedBirdsList.push(birdsList[birdIndex])
    setAdoptedBirdsList([...adoptedBirdsList]) 

   let newTotal = 0;
   adoptedBirdsList.forEach((bird)=>{
      newTotal+=bird.amount;
   })

   if(adoptedBirdsList.length >= 3){
   newTotal *= 0.9;
    setDiscount(10);
   }
   
   setTotal(newTotal);
  }

  function handleBirdDelete(index){
   adoptedBirdsList.splice(index, 1)
   setAdoptedBirdsList([...adoptedBirdsList])
  }
  

  return (
    <div className="app">
      <div className="sidebars">
      <Cart discount={discount} total={total}  birdsList={adoptedBirdsList} onBirdDelete={handleBirdDelete}/>
      <Checkout/>
      </div>
      <Cards birds={birdsList} onBirdAdopted={handleBirdAdopted}/>
    </div>
  );
};

export default App;


