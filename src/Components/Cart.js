import {v1 as generateUniqueID} from "uuid";
import BonusItem from "./BonusItem";

function Cart({ cartQueue, setCartQueue, discount, setDiscount}) {


    let finalPrice = cartQueue.reduce((total, cartBird) => {
        return total + cartBird.amount
    }, 0)

    function deleteItem(item) {
        const newCart = cartQueue.filter(cartBird => cartBird.id !== item.id)
        if (cartQueue.length <= 3) {
            setDiscount(0)
        } else {
            setDiscount(10)
        };
        setCartQueue(newCart);
    }

    if(discount === 10) {
        finalPrice *= .9
    }

    return(
        <div className="Cart">
            <div>
                <p>Cart</p>
                <p>Discount: {discount}%</p>
                <h4>Total: ${finalPrice}</h4>
            </div>
            <div>
                <ol>
                {cartQueue.map(cartBird => {
                    return(
                        <li key={generateUniqueID()}>
                            {cartBird.name} ${cartBird.amount}
                            <button className="delete" onClick={() => deleteItem(cartBird)}>
                                    Delete 
                            </button>
                        </li>
                    )
                })}
            </ol>
            {finalPrice >= 100 && (
                <p>Your donations have qualified you for the following items:</p>
            )}
            <ul>
                <BonusItem finalPrice={finalPrice} />
            </ul>
            </div>
        </div>
    )
}

export default Cart