import birdData from "./data/birds";
import Cards from "./components/Cards";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { useState } from "react";

function App () {
  const [total, setTotal] = useState(0);
  const [birdsList, setBirdsList] = useState(birdData);
 
  function handleBirdAdopted(birdIndex){
    birdsList[birdIndex].adopted = true;
    setBirdsList([...birdsList]); // treat arrays in state as inmutable (use spread operator)
   
   let newTotal = 0;
   birdsList.forEach((bird)=>{
    if (bird.adopted === true){
      newTotal+=bird.amount;
    }
   })
   setTotal(newTotal)
  }
 
  return (
    <div className="app">
      <Cart total={total} birdsList={birdsList}/>
      <Checkout/>
      <Cards birds={birdsList} onBirdAdopted={handleBirdAdopted}/>
    </div>
  );
};

export default App;


