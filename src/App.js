import { useState } from "react";
import "./App.css"
import bonusItems from "./data/bonusItems.js"
import  birdData  from "./data/birds.js";
import Cart from "./componets/Cart.js";
import Checkout from "./componets/Checkout.js";
import BirdCards from "./componets/BirdCards.js";

function App () {
  const [adoptedBirds, SetAdoptedBirds] = useState([]);
  const [total, setTotal] = useState(0);

  function adoptBird (event) {
    const birdName = event.target.value;
    const birdCost = event.target.id;

    setTotal(total+parseInt(birdCost))
    SetAdoptedBirds([...adoptedBirds, {birdName: birdName, birdCost: birdCost}]);
    for (let i=0; i<adoptedBirds.length; i++) {
    }
}



  return (
    <div className="birdSanctuary">
      <Cart adoptedBirds={adoptedBirds} bonusItems={bonusItems} total={total}/>
      <Checkout/>
      <BirdCards birds={birdData} adoptBird={adoptBird}/>
    </div>
  );
};


export default App;
