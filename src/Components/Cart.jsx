import "./Cart.css";
import bonusItems from "../data/bonusItems";

export default function Cart({ onClick, cart: { total, list } }) {
  const discount = list.length >= 3 ? 0.1 : 0;

  return (
    <section className={"Cart section border-black"}>
      <h3>Cart</h3>
      <h5>Discount: {discount * 100}%</h5>
      <h4>Total: ${total - total * discount} </h4>
      <ol>
        {list.map(({ name, amount, id }) => (
          <li key={id} id={id}>
            {" "}
            {name}: ${amount}
            <button className="Cart-button" onClick={(e) => onClick(e, amount)}>
              Delete
            </button>
          </li>
        ))}
      </ol>
      <h6>Your donation has qualified you for the following bonuses:</h6>
      <ul>
        {total >= 100 && <li>{bonusItems[0]}</li>}
        {total >= 300 && <li>{bonusItems[1]}</li>}
        {total >= 500 && <li>{bonusItems[2]}</li>}
        {total >= 1000 && <li>{bonusItems[3]}</li>}
      </ul>
    </section>
  );
}
