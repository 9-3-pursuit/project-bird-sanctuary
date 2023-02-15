export default function Cart({ cartItems, total, bonusItems, deleteBird }) {


    return (
        <>
            <div className="Cart">
                <h2>Cart</h2>
                <h3>Discount: {cartItems.length >= 3 ? 10 : 0}%</h3>
                <h4>Total: ${cartItems.length >= 3 ? total * 0.9 : total}</h4>
                <ol>
                    {cartItems.map((bird, index) => (
                        <>
                            <li key={index}>{bird.name} ${bird.amount}<button id={index} onClick={deleteBird}>Delete</button></li>
                        </>
                    ))}
                </ol>
                <h5>Bonus Items:</h5>
                <ul>
                    {total >= 100 && <li>{bonusItems[0]}</li>}
                    {total >= 300 && <li>{bonusItems[1]}</li>}
                    {total >= 500 && <li>{bonusItems[2]}</li>}
                    {total >= 1000 && <li>{bonusItems[3]}</li>}
                </ul>
            </div>
        </>
    )
}