import { useState, useEffect } from "react"
import {v1 as unique} from "uuid"
import bonusItems from "../data/bonusItems"
export default function Cart ({setBonus, bonus, cart, updateCart}) {

console.log(bonusItems[0])
function filterBirds (id) {
    // console.log(cart)
    // console.log
    console.log(id)
    console.log(cart)
    const filtered = cart.filter((bird) => bird.id !== id)

    updateCart(filtered)



}
    useEffect(() => {
        const total = cart.map(bird => {
            return bird.ammount
        })
        const totalDisplay = document.querySelector("h4.total")
        const discountDisplay = document.querySelector("h3.discount")
        const totalSum = total.reduce((acc, curr) => acc + curr, 0)
        if (totalSum >=100 && totalSum < 300) {
            setBonus([bonusItems[0]])
        }
        if (totalSum>=300 && totalSum<500){
            setBonus([bonusItems[0], bonusItems[1]])
        }
        if (totalSum>=500 && totalSum<1000){
            setBonus([bonusItems[0],bonusItems[1],bonusItems[2]])
        } 
        if (totalSum>=1000) {
            setBonus(bonusItems)
        }

        if (cart.length < 3){
        totalDisplay.textContent= `$${totalSum}`
        discountDisplay.textContent= `Discount: 0%`
        }
        else{ 
        totalDisplay.textContent= `$${totalSum * .90}`
        discountDisplay.textContent= `Discount: 10%`
        }
       
    },[cart] )
    return(
        <>
        <ol className="Cart">
            {cart.map(bird => {
                return (<>
                <li  key={bird.id} className="cartBird">{bird.name} ${bird.ammount}
                <button className="delete" onClick={() => filterBirds(bird.id)}>Delete</button>
                </li>
                </>)
            })}
        </ol>
        <ul>
            {bonus.map(item => {
                return (<>
                <li key={item}>{item}</li>
                </>)
            })}
            </ul>
        <h3 className="discount"></h3>
        <h4 className="total"></h4>
        </>
    )
}