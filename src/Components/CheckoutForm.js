import { useState } from "react"

export default function CheckoutForm({ setCartQueue, discount }) {
    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        zip: "",
    }
    const [user, setUser] = useState(initialState);

    function handleSubmit(event) {
        event.preventDefault();
        alert("You have adopted birds. Thank you!");
        setCartQueue([])
        discount = 0
        console.log(user)
        setUser(initialState)
    }

    function handleTextChange(event) {
        setUser({
            ...user,
            [event.target.id]: event.target.value,
        });
    }

    return(
        <form className="Checkout" onSubmit={handleSubmit} >
            <p className="asideHeader">Checkout</p>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={handleTextChange} value={user.firstName} required />
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={handleTextChange} value={user.lastName} required />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={handleTextChange} value={user.email} required />
            <label htmlFor="zip">Zip Code</label>
            <input type="text" id="zip" onChange={handleTextChange} value={user.zip} minLength={5} maxLength={10} pattern="^[0-9]+$" />
            <input type="submit" id="submit" />
        </form>
    )
}