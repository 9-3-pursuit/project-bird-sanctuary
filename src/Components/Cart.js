import { useEffect } from "react"
import {v1 as unique} from "uuid"
export default function Cart ({cart}) {
    function deleteBird (id) {

        const cartBirds = Array.from(document.querySelectorAll("li.cartBird"))
    //updateCart(cart.filter(bird => )
    }
    useEffect(() => {
        const total = cart.map(bird => {
            return bird.ammount
        })
        const totalDisplay = document.querySelector("h4.total")
        totalDisplay.textContent= `${total.reduce((acc, curr) => acc + curr, 0)}`
    },[cart] )
    return(
        <>
        <ol>
            {cart.map(bird => {
                return (<>
                <li key={unique} className="cartBird">{bird.name} ${bird.ammount}</li>
                <button onClick={deleteBird(unique)}>Delete</button>
                </>)
            })}
        </ol>
        <h4 className="total"></h4>
        </>
    )
}