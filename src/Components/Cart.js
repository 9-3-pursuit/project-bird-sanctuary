
import { useState } from "react";
import AllBirds from "./Allbirds";
import Checkout from "./Checkout";
import bonusItems from "../data/bonusItems";
import { createEvent } from "@testing-library/react";

export default function Cart({ birdCart, discount, removeFromCart }) {


    const adoptBird = birdCart.id
    let cartTotal = 0
    let cartDiscount = 0
    // const bonusItems = getBonusItems(cartTotal).map((bonusStr, i) => {
    //     <li key={i}>{bonusStr}</li>

    function getBonusItems(birdCart) {
        if (cartTotal < 100) {
            return [];
        }
        if (cartTotal < 300) {
            return [bonusItems[0]]
        } else if (cartTotal < 500) {
            return [bonusItems[0]], [bonusItems[1]]
        } else if (cartTotal < 1000) {
        } else {

        }

    }
    function removeFromCart(index) {
        adoptBird = adoptBird.filter((event, i) => i !== index)
    }

    for (let i = 0; i < birdCart.length; i++) {
        cartTotal += birdCart[i].amount
    }
    if (birdCart.length <= 2) {
        cartDiscount = 0
    } else {
        cartDiscount = 0.10
    }

    const cartInfo = birdCart.map((element) => {

        return (

            <li key={element.id}>
                {element.name} ${element.amount}
                {/* <button onClick={() => { removeFromCart() }}>Remove</button> */}
            </li>
        )
    })
    console.log(birdCart)
    //acessing birds data through birds app

    return (
        <div className="Cart">

            <h3>Cart</h3>
            <h4>Discount: {cartDiscount}%</h4>
            <h4>Total: $ {cartTotal}</h4>
            <ol>
                {cartInfo}
            </ol>
            <p></p>
        </div>
    )


}

// result for what the user put in at check out
// import from checkout, can either