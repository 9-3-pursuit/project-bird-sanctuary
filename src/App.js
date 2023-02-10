// import React from "react";
import  birdData  from "./data/birds";
// import BirdCards from "./Components/Birds";
import { useState } from "react";


function App () {
  const [birdsArray, getBirds]= useState(birdData);
 
 
  function CreateBirdCards(){
    const birdCards = birdsArray.map((bird) => (
      <li key={bird.id} className="card">
        <h4>{bird.name}</h4>
        <img
        src={bird.img}
        width="200"
        height="200"
        alt="bird"
        ></img>
        <p>Total ${bird.amount}</p>
        <button>
          <h5>Adopt</h5>
        </button>
      </li>
    ));
  //  console.log(getBirds({...birdsArray}))

    return birdCards
    // return (
    //   <ul>
    //     <li>
    //       {birdCards}
    //     </li>
       
    //   </ul>
    // )
  }
  
    
  return (
    <div>
      <h1>Hello, world!</h1>
      {/* <birdData/> */}
      <CreateBirdCards />
    </div>
  );
};

export default App;
