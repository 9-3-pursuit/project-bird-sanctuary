import "./Checkout.css"

function Checkout(){
    return (
        <div className="checkout">
            <form>
                <h5>Checkout</h5>
                <label htmlFor="first_name">First Name</label>
                <input id="first_name"></input>
                <label htmlFor="last_name">Last Name</label>
                <input id="last_name"></input>
                <label htmlFor="email">Email</label>
                <input id="email"></input>
                <label htmlFor="zip_code">Zip Code</label>
                <input id="zip_code"></input>
                <button>SUBMIT</button>   
            </form>
        </div>
    )
}

export default Checkout


//alert("You have adopted birds. Thank you!")