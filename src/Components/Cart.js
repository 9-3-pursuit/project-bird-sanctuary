
// import Checkout from "./Components/Checkout.js"
import {useState} from "react";
import BirdsDisplay from "./BirdsDisplay";

//adoptCart = the collection of birds based on UserClick from birdsdisplay page.


 export default function Cart({cart,setCart}){
        // creates state 

        // compile the total based on bird info.
        let total = 0
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].amount
        }
        let cartDiscount = 0
        for (let i =0; i < cart.length; i++){
            if (cart.length >= 3){
                total = total * 0.9
                cartDiscount = true
            }
        }


        //const[discount, setDiscount] = useState(0);
    //     // manage discount & apply to cart.
    //     const[bonusItems, setBonusItems] = useState(0);
    //     // manage bonus items & apply to cart.

    const cartInfo = cart.map((cartItems) => {
            return(
                    <li key={cartItems.id}>
                        {cartItems.name}: ${cartItems.amount}
                    </li>
            )
    })


       
    


    




    return (
        <div className="Cart">
          <h1>Cart</h1>
          <h4>Discount: {cartDiscount} </h4>
          <h4>Total:${total} </h4>
          <ol>
            {cartInfo}
          </ol>

        </div>
    )
 }

  
