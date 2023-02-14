// ! checkout requirements --v

// ### Checkout

// - I can complete the inputs in the checkout form.
// - When I complete the form with valid input and click `Submit`, an alert tells me the purchase was successful.
//   - Alert text should include: `You have adopted birds. Thank you!`
// - When I close the alert box, the cart component should fully reset (no birds, no discount, total = 0, no bonus items listed)

export default function Checkout({ cart, setCart }) {
    // * handle for submit button of user form info of :
    // * first name,last name, email, zipcode
    // * alert when order is complete, 
    
    // ! only part working besides the functionailty for the submit form is alert
    function handleSubmit(event) { 
        event.preventDefault();
        alert("You have adopted birds. Thank you!")
        event.target.firstname.value = ""
        event.target.lastname.value = ""
        event.target.email.value = ""
        event.target.zipcode.value = ""
        setCart({ total: 0, discount:false, adoptInfo: [] })


    }

// * return of user submit form with first & last name, email and zip-code
    return (
        <div className="Checkout">
            <form onSubmit={handleSubmit} className="form">
                <h2 className="checkout">Checkout</h2>
                <label htmlFor="First Name">First Name: </label>
                <input
                    type="text"
                    id="firstName"
                    value={cart.firstName}
                />

                <label htmlFor="Last Name">Last Name: </label>
                <input
                    type="text"
                    id="lastName"
                    value={cart.lastName}
                />

                <label htmlFor="Email">Email: </label>
                <input
                    type="text"
                    id="email"
                    value={cart.email}
                />

                <label htmlFor="Zip Code">Zip Code: </label>
                <input
                    type="number"
                    id="zipcode"
                    value={cart.zipcode}
                />
                <br />
                <input className="submit" type="submit"></input>
                {/* <button onSubmit={handleSubmit} type="submit">Submit</button> */}

            </form>
        </div>

    )

}