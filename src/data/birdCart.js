// ! Cart requirements --v
// ! remove button is not a requirement(?)
// - The cart has a class name of `Cart` -> return info
// - When I click on a bird card's adopt button, its name appears in the cart as an `<ol>` list item.
// - The total shows up as an `<h4>` element inside the cart
// - When I click on an additional item, the total cost is updated and additional bird name(s) is added as a list item to the unordered list
// - When there are less than 3 birds in the cart there is a 0% discount
// - When there are 3 or more birds in the cart there is a 10% discount

import bonusItems from "./bonusItems"


// import React from "react";
//  import bonus from ".data/bonusItems.js"

// * The bonuses come from `src/data/bonusItems.js` --v

// - The bonus items are added as list items in an `<ul>` list item as follows:
// - 1 bonus (first array item) is given if the total is between 100 and 300
// - 2 bonuses (first and second array items) are given if the total is between 300 and 500
// - 3 bonuses are given if the total is between 500 and 1000
// - 4 bonuses are given if the total is more than 1000


export default function Cart({ cart, setCart, bonus }) {
    const finalPrice = cart.reduce((birdBef, birdAft) => birdBef + birdAft.amount, 0)

    function removeCopyHandle(birdReturn) {
        const copyBirdArray = cart.filter((newBird) => (newBird.id !== birdReturn))
        setCart(copyBirdArray)
    }

    // * attempt loop for bouns add ons here --v
    // ? if finalPrice is b/t 100 & 300 -> > 100 but < 300
    // ? if finalPrice is b/t 300 & 500 -> > 300 but < 500
    // ? if finalPrice is b/t 500 & 1000 -> > 500 but < 1000
    // ? if finalPrice is  > 1000 

    // ? Attempt at bonus return ---v
    // function bonus(bonus, bonusItems) {
    //     // const [bonus, setBonus] = useState(10)
    //     if (bonus >= 100 && bonus <= 300) {
    //         bonusItems[1]
    //     } else if (bonus > 300 && bonus <= 500) {
    //         bonusItems[1], bonusItems[2]
    //     } else if (bonus > 500 && bonus <= 1000) {
    //         bonusItems[1], bonusItems[2], bonusItems[3]
    //     } else {
    //         bonus > 1000; {
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


    return (
        <div className="cart">
            <h2>Cart</h2>
            <h4>Total: {cart.length >= 3 ? finalPrice * 0.9 : finalPrice} </h4>
            <ol className="bird-appeared">
                {cart.map((newBird) => {
                    return (
                        <div key={newBird.id} className="bird-cart-info">
                            {newBird.name} : ${newBird.amount}
                            <button onClick={() => { removeCopyHandle(newBird.id) }}>Clear</button>

                        </div>
                    )
                })}
            </ol>
            <p>Your donations have qualified you for the following items:</p>
            <ul>
                {finalPrice >= 100 && <>{bonus[0]}</>}
                {finalPrice >= 300 && <>{bonus[1]}</>}
                {finalPrice >= 500 && <>{bonus[2]}</>}
                {finalPrice >= 1000 && <>{bonus[3]}</>}

                {/* Attempts --v */}
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

            </ul>
        </div>

    )
}