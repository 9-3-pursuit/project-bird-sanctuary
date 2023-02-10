import { useState } from "react"

export default function CheckoutForm() {

    function handleSubmit(event) {
        event.preventDefault()
        alert('You have adopted birds. Thank You.')
    }

    return(
        <form onSubmit={handleSubmit}>
            <p className="asideHeader">Checkout</p>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" required />
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" required />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
            <label htmlFor="zipCode">Zip Code</label>
            <input type="text" id="zipCode" minLength={5} maxLength={10} pattern="^[0-9]+$" />
            <input type="submit" id="submit" />
        </form>
    )
}