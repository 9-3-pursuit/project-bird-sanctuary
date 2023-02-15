// import { useState } from "react";

export default function Birds({ birdData, addBird, setAddBird}) {
    const container = {
        display: "grid",
        gridtemplaterows:"200px",
        gridtemplatecolumns:"200px",
    }
    const tableStyle= {
        display:"inline-grid",
        // alignitems: "left",
      
        backgroundColor: "darkcyan",
        color: "blue",
        border: '2px solid',
        height: "270px",
        width: "14%",
        // marginleft: "20px",
     }
     const buttonStyle= {
     display: "inlinegrid",
     height: "30px",
     backgroundColor: "gray",
     }
    function addToCart(bird) {

        setAddBird([...addBird, {name: bird.name, amount: bird.amount}])
       
    }


    return birdData.map((bird)=>{
         return (
            <div className="container">
        <div className="card" key={bird.id}>
            <p className="name">{bird.name}</p>,
            <img src={bird.img} alt={bird.name} />,
            <p className="price">Price: ${bird.amount}</p>
            <button className="birds" onClick={()=>addToCart(bird)}><strong>Adopt</strong></button>
        </div>
         </div>
     ) })
 
}



