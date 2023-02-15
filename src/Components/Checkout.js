import { useState } from "react";

export default function Checkout({ handleSubmit }) {
    return (
        <div className="Checkout">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="first_name">First Name</label>
                <input id="first_name" type="text" placeholder="Type First Name Here" />
                <label htmlFor="last_name">Last Name</label>
                <input id="last_name" type="text" placeholder="Type Last Name Here" />
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="Type E-mail Here" />
                <label htmlFor="zip_code">Zip Code</label>
                <input id="zip_code" type="number" placeholder="Type Zip Code Here" />
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}