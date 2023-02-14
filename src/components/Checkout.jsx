// import userEvent from "@testing-library/user-event";
import React from "react";

export default function checkout ({user, handleTextChange, handleSubmit}) {
    return (
        <div className="Checkout">
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name : </label>
                <input type="text"
                value={user.firstName}
                onChange= {handleTextChange}
                id="firstName"/>

                <label htmlFor="lastName">Last Name:</label>
                <input 
                type="text"
                value={user.lastName}
                onChange = { handleTextChange}
                id="lastName"/>

                <label htmlFor="zipCode">Zip Code:</label>
                <input 
                type = "text"
                value={user.zipCode}
                onChange={handleTextChange}
                id="zipCode"/>

                <label htmlFor="email">Email</label>
                <input 
                type="text"
                value={user.email}
                onChange={handleTextChange}
                id="email"/>

                <input type="submit" />
            </form>
        </div>
    )
}   