import React from "react";
import "./BirdCard.css";


const BirdCard = (props) => {
  return (
    <div className="birds button">
      {props.data.map((bird) => (
        <div className="card" key={bird.id}>
          <img src={bird.img} alt={bird.name} />
          <h3>{bird.name}</h3>
          <p>${bird.amount}</p>
          <button onClick={() => props.setCart(bird)}>
            Adopt
          </button>
        </div>
      ))}
    </div>
  );
};

export default BirdCard;
