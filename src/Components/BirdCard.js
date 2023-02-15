import React from "react";

function BirdCard ({data, click}) {
     return(
        <div className='birds'>
            {data.map((bird) => {
                return (
        <div>
            <h4>{bird.name}</h4>
        <p>{bird.amount}</p>
        <img src={bird.img} alt={`${bird.name}`}></img>
        <button
         onClick={() => {
           click(bird);
         }}>
         Adopt
        </button>
        </div>)})}</div>
     )
 }

export default BirdCard;