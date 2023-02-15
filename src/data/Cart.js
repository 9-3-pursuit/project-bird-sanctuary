import {useState} from "react"

export default function Cart({cart,setCart}){
    let total = 0
    for(let i = 0; i < Cart.length; i++){
        total += cart[i].amount
    }
    let cartDiscount = 0
    for(let i = 0; i < cart.length ; i++){
        if (cart.length >= 3){
            total = total * 0.9
            cartDiscount = true
        }
    }
}

const cartInfo = cart.map((cartItems) => {
    return(
        <li key = {cartItems.id}>
            {cartItems.name}: ${cartItems.amount}
        </li>
    )
})