
import { useState } from "react";
import AllBirds from "./Allbirds";
import Checkout from "./Checkout";
import bonusItems from "../data/bonusItems";

export default function Cart({ birdCart, discount }) {
    const adoptBird = birdCart.id
    let cartTotal = 0
    let cartDiscount = 0

    function removeBird(index) {
        adoptBird = adoptBird.filter((event, i) => i !== index)
        cartDiscount = false
    }

    for (let i = 0; i < birdCart.length; i++) {
        cartTotal += birdCart[i].amount
    }

    for (let i = 0; i < birdCart.length; i++) {
        if (birdCart.length >= 3) {
            cartTotal = cartTotal * 0.9
            cartDiscount = true
        }
    }


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
            <h4>Discount: {cartDiscount}%</h4>
            <h4>Total: $ {cartTotal}</h4>
            <ol>
                {cartInfo}
            </ol>
        </div>
    )


}

// result for what the user put in at check out
// import from checkout, can either