import "./Checkout.css"

function Checkout (props) {

    return (
        <div className="checkout">
            <h3>Checkout</h3>
            <form className="Checkout" onSubmit={props.handleFormSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" type="text"></input>
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" type="text"></input>
                <label htmlFor="email">Email</label>
                <input id="email" type="text"></input>
                <label htmlFor="zipCode">Zip Code</label>
                <input id="zipCode" type="number"></input>
                <br></br>
                <button className="button" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Checkout;