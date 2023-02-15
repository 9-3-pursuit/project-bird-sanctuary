import React from "react";
import "./BirdCard.css";


const BirdCard = (props) => {
  return (
    // <div className="card_container">
    <div className="birds button">
      {props.data.map((bird) => (
        <div className="card" key={bird.id}>
          <span className="birdCard">
          <h3 className="bird_name">{bird.name}</h3>
          <img src={bird.img} alt={bird.name} />
          <h3>${bird.amount}</h3>
          <button onClick={() => props.setCart(bird)}>
            Adopt
            </button>
            </span>
        </div>
      ))}
      </div>
    // </div>
  );
};

export default BirdCard;
