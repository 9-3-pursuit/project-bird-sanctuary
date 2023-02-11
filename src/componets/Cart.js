import "./Cart.css"

function Cart (props) {
    return (
        <div className="Cart">
            <h2>Cart</h2>
            <h3>Discount: {props.adoptedBirds.length >= 3 ? 10 : 0}%</h3>
            <h4>Total: ${props.adoptedBirds.length >= 3 ? props.total * 0.9 : props.total}</h4>
            <ol>
                {props.adoptedBirds.map((bird, index) => {return(
                    <li key={index}>{bird.birdName} ${bird.birdCost}</li>
                )})}
            </ol>
            <p>Your Donations Have Qualified You For The Following Items</p>
            <ul>
                <li>Stickers</li>
            </ul>
        </div>
    );
}

export default Cart;