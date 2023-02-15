import bonusItems from "../data/bonusItems"
import "./Cart.css"


function Cart(props) {

    function addBonus() {
        if (100 <= props.total && props.total < 300) {
            return (
                <>
                    <li>{bonusItems[0]}</li>
                </>
            )
        } else if (300 <= props.total && props.total < 500) {
            return (
                <>
                    <li>{bonusItems[0]}</li>
                    <li>{bonusItems[1]}</li>
                </>
            )
        } else if (500 <= props.total && props.total < 1000) {
            return (
                <>
                    <li>{bonusItems[0]}</li>
                    <li>{bonusItems[1]}</li>
                    <li>{bonusItems[2]}</li>
                </>
            )
        } else if (props.total >= 1000) {
            return (
                <>
                    <li>{bonusItems[0]}</li>
                    <li>{bonusItems[1]}</li>
                    <li>{bonusItems[2]}</li>
                    <li>{bonusItems[3]}</li>
                </>
            )
        }
    }



    return(
        <div className="Cart">
            <h3>Discount: {props.discount}%</h3>
            <h4>Total: ${props.total}</h4>
            <ol>
                {props.birdsList.map((bird, index) => {
                        return (
                            <>
                            <li key={bird.id}>{bird.name}: ${bird.amount}
                            <button onClick={()=>props.onBirdDelete(index)}>delete</button>
                            </li>
                            </>
                        )
                })}
            </ol>
            <p>Your donations have qualified you for the following items:</p>
            <ul>
                {addBonus()}
            </ul>
        </div>
    )
}

export default Cart


