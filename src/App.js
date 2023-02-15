import { useState } from "react";
import  birdData  from "./data/birds";
import BirdCard from "./BirdCard";
import  "./App.css";
import Cart from "./Cart";
// import generateUniqueID from "uuid"


function App () {

  const [addBird, setAddBird] = useState([])
  function handleAddBird() {
  for (let i = 0; i < birdData.length; i++) {

    // console.log("birds", birdData.id )
  }

}

  console.log("ID:", {birdData} )

 
  return (
    <div className="card">
       {/* <UserCart addBird={addBird} setAdBird={setAddBird}/> */}
       <Cart addBird={addBird} />
       <BirdCard birdData={birdData} addBird={addBird} setAddBird={setAddBird} />
       <button onclick={handleAddBird}>Adopt</button>
    
    </div>
  );
};

export default App;
