import bonusItems from "../data/bonusItems";

const Cart = ({ cart, total, discount, handleDeleteClick }) => {
  return (
    <div className="Cart">
      <h1>Cart</h1>
      <p>Discount: {discount}%</p>
      <h4>Total: ${total}</h4>
      <ol>
        {cart.map((bird, index) => {
          return (
            <li key={index}>
              {bird.name} - ${bird.amount}
              <button onClick={() => handleDeleteClick(bird.id, index)}>Delete</button>
            </li>
          );
        })}
      </ol>
      <p>Your donation has qualified you for the following bonus.</p>
      <ul>
        {total >= 100 ? <li key={bonusItems[0]}>{bonusItems[0]}</li> : null}
        {total >= 300 ? <li key={bonusItems[1]}>{bonusItems[1]}</li> : null}
        {total >= 500 ? <li key={bonusItems[2]}>{bonusItems[2]}</li> : null}
        {total >= 1000 ? <li key={bonusItems[3]}>{bonusItems[3]}</li> : null}
      </ul>
    </div>
  );
};

export default Cart;
