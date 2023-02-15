import React from "react";
import birdData from "./data/birds.js";

const birdList = ({birds}) => {
    return (
        <>
            {birds.map((bird) => {
    const {id,name,amount,img} = bird;
    return <article key={id} className="bird">
        <h3>{name}</h3>
        <p>{amount}</p>
        <img src={img} alt={name} width="200" height="200"></img>
    </article>

            })}
        </>
    );
};

// function birdCard () {
//     return (
//        <div className="card">
//         <h3>{birdData.name}</h3>
//         <p>{birdData.amount}</p>
//         <img src={birdData.img} alt="bird" width="200" height="200"></img>
       
//        </div>
//     );
// };

export default birdList;