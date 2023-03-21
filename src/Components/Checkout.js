import { useState } from "react";

export default function Checkout() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    zp: "",
    email: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    alert("You have adopted birds. Thank you!");
    resetForm();
  }

  function handleTextChange(event) {
    setUser({
      ...user,
      [event.target.id]: event.target.value,
    });
  }

  function resetForm() {
    setUser({
      firstName: "",
      lastName: "",
      zip: "",
      email: "",
    });
  }
  return (
    <div>
      <header>
        <h1>Checkout</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First name:</label>
          <input
            type="text"
            value={user.firstName}
            onChange={handleTextChange}
            id="firstName"
            required
          />
          <label htmlFor="lastName">Last name:</label>
          <input
            type="text"
            value={user.lastName}
            onChange={handleTextChange}
            id="lastName"
            required
          />
          <label htmlFor="zip">Zip code:</label>
          <input
            type="number"
            value={user.zip}
            onChange={handleTextChange}
            id="zip"
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            value={user.email}
            onChange={handleTextChange}
            id="email"
            required
          />
          <br />
          <input type="submit" />
        </form>
      </main>
    </div>
  );
}
