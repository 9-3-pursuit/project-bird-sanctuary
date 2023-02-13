
import { useState } from "react";
import AllBirds from "./Allbirds";
import Checkout from "./Checkout";

export default function Cart({ birdCart, discount }) {
    const cartInfo = birdCart.map((element) => {
        return (

            <li key={element.id}>
                {element.name} ${element.amount}
            </li>
        )
    })
    console.log(birdCart)
    //acessing birds data through birds app

    return (
        <div className="Cart">

            <h1>Cart</h1>
            <h4>Discount</h4>
            <h4>Total: $</h4>
            <ol>
                {cartInfo}
            </ol>
        </div>
    )


}

// result for what the user put in at check out
// import from checkout, can either