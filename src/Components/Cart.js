//import bonusItems from "../data/bonusItems"
function Cart({myCart, setMyCart}) {
    function deleteBirdFromCart(index) {
        let tempArr = myCart.adopted
        tempArr = tempArr.filter((event, i) => i !== index)
        let qualifiedForDiscount = false

        let amountTotal = tempArr.map((x) => x.birdAmount).reduce((a,b) => a + b, 0)
            if (tempArr.length >= 3) {
                amountTotal = amountTotal * 0.9
                qualifiedForDiscount = true
            }

            let updatedCart= {total: amountTotal, discount: qualifiedForDiscount, adopted: tempArr}
            setMyCart(updatedCart);
        
    // function QualifiedBonusItems() {
    // if (amountTotal > 100 && amountTotal < 300) {
    //     setMyCart(bonusItems[0])
    // } 
    // else if  (amountTotal >= 300 && amountTotal < 500) {
    //     setMyCart(bonusItems[0], bonusItems[1])
    // }
    // else if (amountTotal >= 500 && amountTotal <= 1000) {
    //     setMyCart(bonusItems[0], bonusItems[1], bonusItems[2])
    // } else 
    //     (amountTotal >= 1000); {
    //         setMyCart(bonusItems[0], bonusItems[1], bonusItems[2], bonusItems[3])
    //     }
    // }
}

      
    return(
       <div className='Cart'>
        <h2>Cart</h2> 
        {myCart.discount ? (<h3>Discount: 10%</h3>): (<h3>Discount: 0%</h3>)}
        <h4>Total: ${myCart.total.toFixed(0)}</h4>
        <ol>
            {myCart.adopted.map((bird, index) => (
            <li 
            key={index} className='Card'>{bird.birdName + ' $' + bird.birdAmount}
            <button className="delButton" onClick={() => deleteBirdFromCart(index)}>Delete</button>
            </li>))}
        </ol>
        <p>Your donation has qualified for the following bonus:</p>
        <ul>{myCart.amountTotal ? (<h3>Discount: 10%</h3>): (<h3>Discount: 0%</h3>)}</ul>
       </div>
    )
}

export default Cart;

//<h3>Discount: {birdData.length >= 3 ? 10 : 0}%</h3>
//<h4>Total: $ {birdData.length >= 3 ? amountTotal  * 0.9 : amountTotal}</h4>


    //const [amountTotal, setAmountTotal] = useState('');
    //const discountTotal =  amountTotal * 0.9;
    // Make sure to change birdData to a state from BirdCard
    
    //const bird = [1,2];

    // if (total > 100 && total < 300) {
    //     bonusItems[0];
    // } 
    // else if  (total >= 300 && total < 500) {
    //    bonusItems[0], bonusItems[1]
    // }
    // else if (total >= 500 && total <= 1000) {
    //         bonusItems[0], bonusItems[1], bonusItems[2]
    // } else {
    //         (total > 1000) {
    //             bonusItems[0], bonusItems[1], bonusItems[2], bonusItems[3]
    //     }
    // }


    // function QualifiedBonusItems() {
    // if (tempTotal > 100 && tempTotal < 300) {
    //     setMyCart(bonusItems[0])
    // } 
    // else if  (tempTotal >= 300 && tempTotal < 500) {
    //     setMyCart(bonusItems[0], bonusItems[1])
    // }
    // else if (tempTotal >= 500 && tempTotal <= 1000) {
    //     setMyCart(bonusItems[0], bonusItems[1], bonusItems[2])
    // } else 
    //     (tempTotal >= 1000); {
    //         setMyCart(bonusItems[0], bonusItems[1], bonusItems[2], bonusItems[3])
    //     }
    // }