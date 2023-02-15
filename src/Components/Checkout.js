import React, { useState } from "react";
import "./Checkout.css";

const Checkout = ({ handleClearCart }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert(`You have adopted birds. Thank you!`);
    setFirstName("");
    setLastName("");
    setEmail("");
    setZipCode("");
    handleClearCart();
  };

  return (
    <div className="Checkout">
      <form onSubmit={handleSubmit}>
        <h1 className="checkout1">Checkout</h1>
        <br />
        <label for="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <br />
        <label for="lastName"> Last Name</label>
        <input
          id="lastName"
          type="text"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <br />
        <label for="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <label for="zipCode">Zip Code</label>
        <input
          id="zipCode"
          type="text"
          value={zipCode}
          onChange={(event) => setZipCode(event.target.value)}
        />
        <br />
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default Checkout;
