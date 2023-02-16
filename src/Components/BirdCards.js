
import React from "react";
// import { useState } from "react";




export default function Birds({birdCards}) {
  console.log(birdCards)
    const birds = birdCards.map((bird)=> {
        
// create  in app.js and only return basic div elements starting with
    return (
    <div className="birds">
      <ul id="grid">
       {birdCards}
      </ul>
    </div>
  );
});
    console.log(birds)
    return birds
}
