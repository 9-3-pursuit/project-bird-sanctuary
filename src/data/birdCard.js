// ! card requirements --v
// - The bird data comes from `src/data/birds.js`
// - Each bird card displays the name, image, and amount (price)
// - Each bird card has a class name of `card`
// - Each bird card has an `Adopt` button
//   - The button text should be: `Adopt`

import React from "react";


export default function Card({ setCard, birdInfo }) {
    return (
        <div className="card">
            {birdInfo.map((birdClicked) => {
                return (
                    <div key={birdClicked.id} className="birds">
                        <h4>{birdClicked.name}</h4>
                        <img src={birdClicked.img} alt={birdClicked.name} />
                        <p>Price: $ {birdClicked.amount}</p>
                        <button value="click" onClick={() => setCard(birdClicked.id)}>Adopt</button>
                    </div>
                )
            })}
        </div>
    )
}

