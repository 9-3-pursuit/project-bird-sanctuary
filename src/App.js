import { useState } from "react";
import "./App.css"
import bonusItems from "./data/bonusItems.js"
import  birdData  from "./data/birds.js";
import Cart from "./componets/Cart.js";
import Checkout from "./componets/Checkout.js";
import BirdCards from "./componets/BirdCards.js";

function App () {
  const [adoptedBirds, setAdoptedBirds] = useState([]);
  const [total, setTotal] = useState(0);

  function adoptBird (event) {
    const birdName = event.target.value;
    const birdCost = event.target.id;


    setTotal(total+parseInt(birdCost))
    setAdoptedBirds([...adoptedBirds, {birdName: birdName, birdCost: birdCost}]);
    for (let i=0; i<adoptedBirds.length; i++) {
    }
}

  function handleFormSubmit (event) {
    event.preventDefault();
    setAdoptedBirds([]);
    setTotal(0);
    alert("You have adopted birds. Thank you!");
  }

  function removeLi (event) {
    let updatedBirdsList = [...adoptedBirds];
    updatedBirdsList.splice(event.target.value, 1);
    setAdoptedBirds(updatedBirdsList);
  }

  return (
    <div className="birdSanctuary">
      <main>
        <Cart adoptedBirds={adoptedBirds} items={bonusItems} total={total} removeLi={removeLi}/>
        <br></br>
        <Checkout handleFormSubmit={handleFormSubmit}/>
      </main>
      <BirdCards birds={birdData} adoptBird={adoptBird}/>
    </div>
  );
};


export default App;
