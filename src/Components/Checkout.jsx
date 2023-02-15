import "./Checkout.css";
import { useState } from "react";

export default function Checkout({ onSubmit }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zipCode: 0,
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.id]: e.target.value });
  }

  function handleAlert(e) {
    e.preventDefault();
    alert("Oh no! Fill the form the complete your adoption.");
  }

  return (
    <section className={"Checkout section border-black"}>
      <h4>Checkout</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (Object.values(form).every((entry) => entry !== "")) {
            setForm({
              firstName: "",
              lastName: "",
              email: "",
              zipCode: "",
            });
            onSubmit(e);
          } else {
            handleAlert(e);
          }
        }}
      >
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          value={form.firstName}
          onChange={handleChange}
          placeholder="First name"
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Last name"
          value={form.lastName}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="YourEmail@email.com"
          value={form.email}
          onChange={handleChange}
        />
        <label htmlFor="zipCode">Zip Code</label>
        <input
          id="zipCode"
          name="zipCode"
          type="number"
          placeholder="XXXXX"
          value={form.zipCode}
          onChange={handleChange}
        />
        <input type="submit"></input>
      </form>
    </section>
  );
}
