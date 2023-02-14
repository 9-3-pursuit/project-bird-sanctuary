import bonusItems from "../data/bonusItems"

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
     
         //Bonus Requirements
         let bonus = []; 
          amountTotal = tempArr.map((x) => x.birdAmount).reduce((a,b) => a + b, 0)  
         if (amountTotal >= 100) {
            bonus.push(bonusItems[0]);
         }
         if (amountTotal >= 300 &&  amountTotal <= 500) {
            bonus.push(bonusItems[0], bonusItems[1]);
         }
         if (amountTotal>= 500 && amountTotal <= 1000) {
            bonus.push(bonusItems[0], bonusItems[1], bonusItems[2]);
         }
         if (amountTotal >= 1000) {
            bonus.push(bonusItems[0], bonusItems[1], bonusItems[2],  bonusItems[3]);
         }
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
        <p>Your donation has qualified for the following bonus items:</p>
        <ul>{bonusItems.map(( b,index ) => { return <li key={index}>{b}</li>;})}</ul>
       </div>
    )
}

export default Cart;
