import React from "react";

export default function BirdCard ({birdData, clickBird}) {

    return(
        <div className='birds'>
            {birdData.map((bird) => {
                return (
                    <div>
                    <h4>{bird.name}</h4>
      <p>{bird.amount}</p>
      <img src={bird.img} alt={`${bird.name}`}></img>
      <button
        onClick={() => {
          clickBird(bird);
        }}>
        Adopt
      </button>
    </div>
                )
            })}
      </div>
    )
}

