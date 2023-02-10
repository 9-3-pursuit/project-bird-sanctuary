import "./Cart.css";

export default function Cart({ list, total, setTotal }) {
  const discount = list.length >= 3 ? 0.1 : 0;
  return (
    <section className={"Cart section border-black"}>
      <h4>Cart</h4>
      <h5>Discount: {discount * 100}%</h5>
      <h5>Total: $ {total - total * discount} </h5>
      <ol>
        {list.map(({ name, amount, id }) => (
          <li id={id}>
            {" "}
            {name}: ${amount}
          </li>
        ))}
      </ol>
      <p>Your donation has qualified you for the following bonuses</p>
      <ul></ul>
    </section>
  );
}
