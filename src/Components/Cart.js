import {v1 as generateUniqueID} from "uuid";
import BonusItem from "./BonusItem";

export default function Cart({ cartQueue, setCartQueue, discount, setDiscount}) {
    

    let totalAmount = cartQueue.reduce((total, cartItem) => {
        return total + cartItem.amount
    }, 0)

    function deleteItemFromCart(cartItem) {
        const updatedCart = cartQueue.filter(cartItemObj => cartItemObj.id !== cartItem.id)
        cartQueue.length <= 3 ? setDiscount(0) : setDiscount(10);
        setCartQueue(updatedCart);
    }

    if(discount === 10) {
        totalAmount *= .9
    }

    return(
        <div className="Cart">
            <div className="cartTopInfo">
                <p className="asideHeader">Cart</p>
                <p className="discount">Discount: {discount}%</p>
                <h4 className="total">Total: ${totalAmount}</h4>
            </div>
            <div className="cartBottom">
                <ol>
                {cartQueue.map(cartItem => {
                    return(
                        <li key={generateUniqueID()} className="item">
                            {cartItem.name} ${cartItem.amount}
                            <button className="delete" onClick={() => deleteItemFromCart(cartItem)}>
                                <span className="material-symbols-outlined">
                                    delete
                                </span>
                            </button>
                        </li>
                    )
                })}
            </ol>
            {totalAmount >= 100 ? (
                <p className="donations">Your donations have qualified you for the following items:</p>
            ) : null}
            <ul>
                <BonusItem totalAmount={totalAmount} />
            </ul>
            </div>
            
            
        </div>
    )
}