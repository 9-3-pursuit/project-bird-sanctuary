// ! Cart requirements --v
// - The cart has a class name of `Cart` -> return info
// - When I click on a bird card's adopt button, its name appears in the cart as an `<ol>` list item.
// - The total shows up as an `<h4>` element inside the cart
// - When I click on an additional item, the total cost is updated and additional bird name(s) is added as a list item to the unordered list
// - When there are less than 3 birds in the cart there is a 0% discount
// - When there are 3 or more birds in the cart there is a 10% discount

// * The bonuses come from `src/data/bonusItems.js` --v

// - The bonus items are added as list items in an `<ul>` list item as follows:
// - 1 bonus (first array item) is given if the total is between 100 and 300
// - 2 bonuses (first and second array items) are given if the total is between 300 and 500
// - 3 bonuses are given if the total is between 500 and 1000
// - 4 bonuses are given if the total is more than 1000

import Bonus from "./bonusItems.js"
export default function Cart({ discount, total, cart, setCart, setTotal, setDiscount }) {

    // * function that iterate & clears copy of birds to match for total,discount,price --v
    function clear(index) {

        const copyBirdArray = cart.filter((newBird, id) => id !== index)
        setCart(copyBirdArray)

        let newTotal2 = copyBirdArray.map((price) => price.birdamount).reduce((a, b) => a + b, 0)
        if (copyBirdArray.length >= 3) {
            setTotal(newTotal2 * 0.9)
            setDiscount(false)


        } else {
            setTotal(newTotal2)
        }


    }
// * maps through the bird data to match bird name and price requested ---v
    return (
        <div className="Cart">
            <h2>Cart</h2>
            {discount ? (<h3>Discount: 10%</h3>) : (<h3>Discount: 0%</h3>)}
            <h4>Total: ${total} </h4>
            <ol className="bird-list">
                {cart.map((newBird, index) => {
                    return (
                        <li key={index} className="bird-new">
                            {newBird.birdname} : ${newBird.birdamt.toFixed(0)}
                            <button onClick={() => clear(index)}>Clear</button>

                        </li>
                    )
                })}
            </ol>
            <p>Your donations have qualified you for the following items:</p>
            <Bonus total={total} />
        </div>

    )
}