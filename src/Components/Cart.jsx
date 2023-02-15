import "./Cart.css";
import bonusItems from "../data/bonusItems";
import CartItem from "./CartItem";

export default function Cart({ onClick, cart: { total, list } }) {
  const DISCOUNT = list.length >= 3 ? 0.1 : 0;
  const DISCOUNTED_TOTAL = total - total * DISCOUNT;

  return (
    <section className={"Cart section border-black"}>
      <h3>Cart</h3>
      <h5>Discount: {DISCOUNT * 100}%</h5>
      <h4>Total: ${DISCOUNTED_TOTAL} </h4>
      <ol>
        {list.map((cartItemInfo) => {
          return <CartItem item={cartItemInfo} onClick={onClick} />;
        })}
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
