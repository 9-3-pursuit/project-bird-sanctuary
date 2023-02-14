// ! Cart requirements --v
// ! remove button is not a requirement(?)
// - The cart has a class name of `Cart` -> return info
// - When I click on a bird card's adopt button, its name appears in the cart as an `<ol>` list item.
// - The total shows up as an `<h4>` element inside the cart
// - When I click on an additional item, the total cost is updated and additional bird name(s) is added as a list item to the unordered list
// - When there are less than 3 birds in the cart there is a 0% discount
// - When there are 3 or more birds in the cart there is a 10% discount




// import React from "react";
//  import bonus from ".data/bonusItems.js"

// * The bonuses come from `src/data/bonusItems.js` --v

// - The bonus items are added as list items in an `<ul>` list item as follows:
// - 1 bonus (first array item) is given if the total is between 100 and 300
// - 2 bonuses (first and second array items) are given if the total is between 300 and 500
// - 3 bonuses are given if the total is between 500 and 1000
// - 4 bonuses are given if the total is more than 1000

 import Bonus from "./bonusItems.js"
export default function Cart({ discount, total, cart, setCart,setTotal,setDiscount }) {

    // if (cart.length >= 3) {
    //     setDiscount(true)
    //     setTotal(total * 0.9)
    // }
    // // * bonus iteration here ---v
    // let finalPrice = cart.reduce((birdBef, birdAft) => {
    //     return birdBef + birdAft.amount
    // }, 0)

    // // * discount & cart iteration here ---v
    // let discountPrice = 0
    // let discount = 0
    // cart.map((discountBird) => {
    //     if (cart.length > 2) {
    //         return discountPrice += discountBird.amount * 0.9
    //     } else {
    //         return discountPrice += discountBird.amount
    //     }
    // })

    // // * remove handle here ---v
    // function removeCopyHandle(birdReturn) {
    //     const copyBirdArray = cart.filter((newBird) => (newBird.id !== birdReturn))
    //     setCart(copyBirdArray)
    // }

    // * attempt loop for bouns add ons here --v
    // ? if finalPrice is b/t 100 & 300 -> > 100 but < 300
    // ? if finalPrice is b/t 300 & 500 -> > 300 but < 500
    // ? if finalPrice is b/t 500 & 1000 -> > 500 but < 1000
    // ? if finalPrice is  > 1000 

    // ? Attempt at bonus return ---v
    // function bonus({cart}) {
    //      let addBonus=[]
    //     if ((cart.total >= 100 && a <= 300)) {
    //         bonusItems[1]
    //     } else if (addBonus > 300 && addBonus <= 500) {
    //         bonusItems[1], bonusItems[2]
    //     } else if (addBonus > 500 && addBbonus <= 1000) {
    //         bonusItems[1], bonusItems[2], bonusItems[3]
    //     } else {
    //         addBonus > 1000; {
    //             bonusItems[1], bonusItems[2], bonusItems[3], bonusItems[4]
    //         }
    //     }
    // }


    // if (finalPrice >= 100 && finalPrice <= 300) {
    //     bonus[1]
    // } else if (finalPrice > 300 && finalPrice <= 500) {
    //     bonus[1], bonus[2]
    // } else if (finalPrice > 500 && finalPrice <= 1000) {
    //     bonus[1], bonus[2], bonus[3]
    // } else {
    //     setCart(finalPrice > 1000); {
    //         bonus[1], bonus[2], bonus[3], bonus[4]
    //     }
    // }
    function clear(index) {
        // console.log("hello")
        const copyBirdArray = cart.filter((newBird, id) => id !== index)
        setCart(copyBirdArray)

      

        let newTotal2 = copyBirdArray.map((price) => price.birdamt).reduce((a, b) => a + b, 0)
        if (copyBirdArray.length >= 3) {
           setTotal(newTotal2 * 0.9)
           setDiscount(false)

           
        } else {
            setTotal(newTotal2)
        }

     
}

    return (
        <div className="cart">
            <h2>Cart</h2>
            {discount ? (<h3>Discount: 10%</h3>) : (<h3>Discount: 0%</h3>)}
            <h4>Total: ${total} </h4>
            <ol className="bird-appeared">
                {cart.map((newBird, index) => {
                    return (
                        <li key={index} className="bird-cart-info">
                            {newBird.birdname} : ${newBird.birdamt.toFixed(0)}
                            <button onClick={() => clear(index)}>Clear</button>

                        </li>
                    )
                })}
            </ol>
            <p>Your donations have qualified you for the following items:</p>
          
                <Bonus total={total}/>
                {/* {bonus} */}
                {/* { >= 100 && <li>{bonus[0]}</li>}
                { >= 300 && <li>{bonus[1]}</li>}
                { >= 500 && <li>{bonus[2]}</li>}
                { >= 1000 && <li>{bonus[3]}</li>} */}

                {/* Attempts --v */}
                {/* {discountPrice}  */}
                {/* {cart.length >= 3 ? finalPrice * 0.9 : finalPrice} */}
                {/* {cart.length > 2 ? 10 : 0}  */}
                {/* <h3>Discount: {birdArr.length >=3 ? 10 :0}</h3> */}
                {/* <Bonus bonus={bonus} /> */}
                {/* {bonus.map((addBonus, index) => {
                    return (
                        <li>
                            key={index}{addBonus}
                        </li>
                    )
                })
                } */}

           
        </div>

    )
}