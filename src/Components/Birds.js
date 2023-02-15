// import React from "react"
import React from "react";
// import { useState } from "react";

export default function Birds({birdsArray}) {
    console.log(birdsArray)
  const birdCards = birdsArray.map((bird) => (
    <div className="birds">
      <ul id="grid">
        <li key={bird.id} className="card">
          <h4>{bird.name}</h4>
          <p>Total ${bird.amount}</p>
          <img src={bird.img} width="200" height="200" alt="bird"></img>
          <br></br>
          <button>Adopt</button>
        </li>
      </ul>
    </div>
  ));

  return birdCards;
}
