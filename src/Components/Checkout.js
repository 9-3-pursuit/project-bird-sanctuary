import { useState } from "react"

export default function Checkout() {
    return(
        <form>
            <h2>Checkout</h2>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" required />
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" required />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
            <label htmlFor="zipCode">Zip Code</label>
            <input type="number" id="zipCode" />
            <input type="submit" id="submit" />
        </form>
    )
}