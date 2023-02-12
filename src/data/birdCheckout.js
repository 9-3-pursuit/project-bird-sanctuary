// ! checkout requirements --v

// ### Checkout

// - I can complete the inputs in the checkout form.
// - When I complete the form with valid input and click `Submit`, an alert tells me the purchase was successful.
//   - Alert text should include: `You have adopted birds. Thank you!`
// - When I close the alert box, the cart component should fully reset (no birds, no discount, total = 0, no bonus items listed)

import { useState } from "react"


export default function Checkout({handleSubmit, handleTextChangeBird,resetBirdForm,}) {
    // const [checkout, setCheckout] = useState() // * state var. for checkout
    const [customer, setCustomerInfo] = useState({
        firstName: " ",
        LastName: " ",
        email: " ",
        zipcode: " ",
    })

    function handleSubmit(event) { // * handle for submit button of user form info
        event.preventDefault();
        resetBirdForm();
        alert(`You have adopted birds. Thank you!`)
       
     }
    function handleTextChangeBird(event) { // * handle for bird options user puts in
        setCustomerInfo({...customer,[event.target.id]: event.target.value}) // ? computes the properties names


    }


    function resetBirdForm() { // ! this might be changed to a cart reset not card reset(?)
        setCustomerInfo([])
    }

return (
    <form onSubmit={handleSubmit} className="form">
        <h2 className="checkout">Checkout</h2>
        <label htmlFor="firstName">First Name: </label>
        <input
        type="text"
        id="firstName"
        value={customer.firstName}
        onChange={handleTextChangeBird} />
        
        <label htmlFor="lasttName">Last Name: </label>
        <input
        type="text"
        id="lastName"
        value={customer.lastName}
        onChange={handleTextChangeBird} />

<label htmlFor="email">Email: </label>
        <input
        type="text"
        id="email"
        value={customer.email}
        onChange={handleTextChangeBird} />

<label htmlFor="zipCode">Zip Code: </label>
        <input
        type="number"
        id="zipCode"
        value={customer.zipCode}
        onChange={handleTextChangeBird} />
        <br />

        <button className="button" type="Submit">Submit</button>

    </form>
)

}