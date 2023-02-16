import "./Checkout.css";
import { useState } from "react";
import { useContext } from "react";
import { ModeContext, CartDispatchContext } from "../../data/modeContext";

export default function Checkout() {
  const currentMode = useContext(ModeContext);
  const dispatch = useContext(CartDispatchContext);

  const INITIAL_STATE = {
    firstName: "",
    lastName: "",
    email: "",
    zipCode: 0,
  };

  const [form, setForm] = useState(INITIAL_STATE);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.id]: e.target.value });

  function handleSubmit(e) {
    e.preventDefault();
    const NO_EMPTY_VALUES = Object.values(form).every((entry) => entry !== "");

    if (NO_EMPTY_VALUES) {
      alert("You have adopted birds. Thank you!");
      dispatch({ type: "submitted" });
      setForm(INITIAL_STATE);
    } else {
      alert("Oh no! Please fill out the form to complete your adoption.");
    }
  }

  return (
    <section className={`Checkout section border-black ${currentMode}`}>
      <h4>Checkout</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
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
