
import React from "react";

import BirdCard from "./BirdCard";
import "./BirdsDisplay.css"


export default function BirdsDisplay({ birds }) {

  const birdCards = birds.map((bird) => (
    <li key={bird.id}>
      <BirdCard bird={bird} />
    </li>
  ));
  return (<ul className="bird-display">{birdCards}</ul>);
}


