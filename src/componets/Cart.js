import "./Cart.css"

function Cart (props) {
    const updateditems = []

    if (props.total >= 100) {
        updateditems.push(props.items[0]);
        if (props.total >= 300) {
            updateditems.push(props.items[1]);
            if (props.total >= 500) {
                updateditems.push(props.items[2]);
                if (props.total >= 1000) {
                    updateditems.push(props.items[3]);
                }
            }
        }
    }

    return (
        <div className="Cart">
            <h2>Cart</h2>
            <h3>Discount: {props.adoptedBirds.length >= 3 ? 10 : 0}%</h3>
            <h4>Total: ${props.adoptedBirds.length >= 3 ? props.total * 0.9 : props.total}</h4>
            <ol>
                {props.adoptedBirds.map((bird, index) => {return(
                    <li key={index}>
                        {bird.birdName} ${bird.birdCost}
                        <button value={index} onClick={props.removeLi}>unAdopt</button>
                    </li>
                )})}
            </ol>
            <p>Your Donations Have Qualified You For The Following Items</p>
            <ul>
                {updateditems.map((item, index) => {return(
                    <li key={index}>{item}</li>
                )})}
            </ul>
        </div>
    );
}

export default Cart;