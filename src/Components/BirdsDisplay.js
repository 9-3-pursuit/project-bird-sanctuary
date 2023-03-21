
import React from "react";
import birdData from "../data/birds";
import BirdCard from "./BirdCard";
import "./BirdsDisplay.css"


export default function BirdsDisplay({addToCart}) {

  const birdCards = birdData.map((bird) => (
    <li key={bird.id}>
      <BirdCard  addToCart={addToCart} bird={bird}/>
    </li>
  ));
  return (<ul className="bird-display">{birdCards}</ul>);
}


