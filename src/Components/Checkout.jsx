import "./Checkout.css";

export default function Checkout() {
  return (
    <section className={"Checkout section border-black"}>
      <h4>Checkout</h4>
      <form>
        <label htmlFor="first-name">First Name</label>
        <input
          id="first-name"
          name="first-name"
          type="text"
          placeholder="First name"
        />
        <label htmlFor="last-name">Last Name</label>
        <input
          id="last-name"
          name="last-name"
          type="text"
          placeholder="Last name"
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="YourEmail@email.com"
        />
        <label htmlFor="">Zip-Code</label>
        <input
          id="Zip-Code"
          name="Zip-Code"
          type="number"
          placeholder="XXXXX"
        />
        <input type="submit"></input>
      </form>
    </section>
  );
}
