import {v1 as generateUniqueID} from "uuid";
import bonusItems from "../data/bonusItems";

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

    let bonusArray = [];
    if (finalPrice >= 100) {
        bonusArray.push(bonusItems[0]);
     }
     if (finalPrice >= 300) {
        bonusArray.push(bonusItems[1]);
     }
     if (finalPrice>= 500) {
        bonusArray.push(bonusItems[2]);
     }
     if (finalPrice >= 1000) {
        bonusArray.push(bonusItems[3]);
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
            <ul>{bonusArray.map(( b ) => { return <li >{b}</li>;})}</ul>
            </div>
        </div>
    )
}

export default Cart