import { useState } from "react";
import "../styles/Checkout.css";

const Checkout = ({ resetCart }) => {
  const [user, setUser] = useState({
    firsName: "",
    lastName: "",
    zip: "",
    email: "",
  });

  const handleTextChange = (event) => {
    setUser({
      ...user,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    resetForm();
    resetCart();
    alert("You have adopted birds. Thank you!");
  };

  const resetForm = () => {
    setUser({
      firstName: "",
      lastName: "",
      zip: "",
      email: "",
    });
  };

  return (
    <div className="Checkout">
      <form onSubmit={handleSubmit}>
        <h3>Checkout</h3>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" onChange={handleTextChange} value={user.firstName} placeholder="<firstName here.../>" />

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" onChange={handleTextChange} value={user.lastName} placeholder="<lastName here.../>" />

        <label htmlFor="firstName">Email:</label>
        <input type="text" id="email" onChange={handleTextChange} value={user.email} placeholder="<email.../>" />

        <label htmlFor="firstName">Zip Code</label>
        <input type="number" id="zip" onChange={handleTextChange} value={user.zip} placeholder="<zipCode.../>" />

        <br />

        <input id="submit-button" type="submit" />
      </form>
    </div>
  );
};

export default Checkout;
