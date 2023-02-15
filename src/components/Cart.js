import bonusItems from "../data/bonusItems";

function Cart({ cartItems, setcartItems }) {
  const discountEligible = cartItems.length >= 3;
  let totalPrice = cartItems.reduce((a, b) => {
    return (a += b.amount);
  }, 0);
  if (discountEligible) {
    totalPrice = totalPrice - (totalPrice / 100) * 10;
  }
  const getBonusItems = () => {
    if (totalPrice >= 100 && totalPrice < 300) return bonusItems.slice(0, 1);
    else if (totalPrice >= 300 && totalPrice < 500)
      return bonusItems.slice(0, 2);
    else if (totalPrice >= 500 && totalPrice < 1000)
      return bonusItems.slice(0, 3);
    else if (totalPrice >= 1000) return bonusItems.slice(0, 4);
    return [];
  };

  function deleteCartItem(itemId) {
    (cartItems.filter((e, idx) => itemId !== idx));
  }

  return (
    <div className="Cart">
      <h2>Cart</h2>
      <h5>Discount: {discountEligible ? "10%" : "0%"}</h5>
      <h4>Total: {`$${totalPrice}`}</h4>
      <ol>
        <h5>Cart Items</h5>
        {cartItems.map((item, idx) => {
          return (
            <li key={item.id}>
              {item.name} ${item.amount}
              <button onClick={() => deleteCartItem(idx)}>DEL</button>
            </li>
          );
        })}
      </ol>
      <ul>
        <h5>Bonus Items</h5>
        {getBonusItems().map((item, idx) => {
          return <li key={idx}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
export default Cart;
