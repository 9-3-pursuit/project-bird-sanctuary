import React from 'react';

const BirdCards = (props) => {
  return (
    <div className="card birds">
      <h4>{props.name}</h4>
      <p>{props.amount}</p>
      <img src={props.img} alt={`${props.name}`}></img>
      <button onClick = {() => {props.handleCartListener(props.bird)}}></button>
    </div>
  );
};

export default BirdCards;
