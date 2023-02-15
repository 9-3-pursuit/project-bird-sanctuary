import "./Cart.css";
import bonusItems from "../data/bonusItems";
import CartItem from "./CartItem";

export default function Cart({ dispatch, cart: { total, list }, currentMode }) {
  const DISCOUNT = list.length >= 3 ? 0.1 : 0;
  const DISCOUNTED_TOTAL = total - total * DISCOUNT;

  function handleRemoveFromCart(e, amount) {
    const LIST_WITH_ITEMS_FILTERED = list.filter(
      ({ id }) => id !== e.target.parentNode.id
    );
    dispatch({
      type: "removed",
      listWithItemFiltered: LIST_WITH_ITEMS_FILTERED,
      amount: amount,
    });
  }

  return (
    <section className={`Cart section border-black ${currentMode}`}>
      <h3>Cart</h3>
      <h5>Discount: {DISCOUNT * 100}%</h5>
      <h4>Total: ${DISCOUNTED_TOTAL} </h4>
      <ol>
        {list.map((cartItemInfo) => {
          return (
            <CartItem item={cartItemInfo} onClick={handleRemoveFromCart} />
          );
        })}
      </ol>
      {total > 100 ? (
        <h6>Your donation has qualified you for the following bonuses:</h6>
      ) : (
        <h6>Make a donation to qualify for a bonus</h6>
      )}
      <ul>
        {total >= 100 && <li>{bonusItems[0]}</li>}
        {total >= 300 && <li>{bonusItems[1]}</li>}
        {total >= 500 && <li>{bonusItems[2]}</li>}
        {total >= 1000 && <li>{bonusItems[3]}</li>}
      </ul>
    </section>
  );
}
