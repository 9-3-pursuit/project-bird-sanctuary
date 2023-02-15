import birdData from "./data/birds";
import bonusItems from "./data/bonusItems";
import BirdCard from "./Components/BirdCard";
import { useState } from "react";
function App () {
  return (
    <>
    <div className="cart">

    </div>
    <div className="checkout">

    </div>
    <div className="card">
      <ul>
        {birdData.map(bird=> {
        return <BirdCard thisBird={bird}/>
      })}
      </ul>
    </div>
    </>
  );
};

export default App;
