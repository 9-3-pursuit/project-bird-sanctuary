import "./Cart.css";

export default function Cart({ list, total, setTotal }) {
  return (
    <section className={"Cart section border-black"}>
      <h4>Cart</h4>
      <h5>Discount: 0%</h5>
      <h5>Total: $ {total} </h5>
      <ul>
        {list.map(({ name, amount, id }) => (
          <li id={id}>
            {" "}
            {name}: ${amount}
          </li>
        ))}
      </ul>
      <p>Your donation has qualified you for the following bonuses</p>
      <ol></ol>
    </section>
  );
}
