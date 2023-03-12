import birdData from "./data/birds";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import bonusItems from "./data/bonusItems";
import BirdCard from "./Components/BirdCard";
import { useState } from "react";
function App () {
  const [cart, updateCart] = useState([]);
  const [bonus, setBonus] = useState([])
  return (
    <>
    <div className="Cart">
      <Cart setBonus={setBonus} bonus={bonus} cart={cart} updateCart={updateCart}/>
    </div>
    <div className="checkout">
      <Checkout setBonus={setBonus} updateCart={updateCart}/>
    </div>
    <div className="card">
      <ul>
        {birdData.map(bird=> {
        return <BirdCard thisBird={bird} cart={cart} updateCart={updateCart}/>
      })}
      </ul>
    </div>
    </>
  );
};

export default App;
