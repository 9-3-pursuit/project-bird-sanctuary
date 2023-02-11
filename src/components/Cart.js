import bonusItems from "../data/bonusItems"
import "./Cart.css"

function Cart(props) {
  
    return(
        <div className="cart">
            <h4>Total: ${props.total}</h4>
            <ol>
                {props.birdsList.map((bird) => {
                    if (bird.adopted === true) {
                        return (
                            <li>{bird.name}: ${bird.amount}</li>
                        )
                    }
                })}
            </ol>
            <p></p>
            <ul></ul>

        </div>
    )
}

export default Cart