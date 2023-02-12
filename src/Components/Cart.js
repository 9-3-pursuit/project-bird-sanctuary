
function Cart({myCart}) {
    //const [amountTotal, setAmountTotal] = useState('');
    //const discountTotal =  amountTotal * 0.9;
    // Make sure to change birdData to a state from BirdCard
    
    //const bird = [1,2];
    

       
    return(
       <div className='Cart'>
        <h2>Cart</h2> 
        {myCart.discount ? (<h3>Discount: 10 %</h3>): (<h3>Discount: 0 %</h3>)}
        <h4>Total: $ {myCart.total.toFixed(2)}</h4>
        <ol>
            {myCart.adopted.map((adoptedBird, index) => (
            <li key={index}>{adoptedBird}</li>))}
        </ol>
        <p>Your donation has :</p>
        <ul></ul>
       </div>
    )
}

export default Cart;

//<h3>Discount: {birdData.length >= 3 ? 10 : 0}%</h3>
//<h4>Total: $ {birdData.length >= 3 ? amountTotal  * 0.9 : amountTotal}</h4>