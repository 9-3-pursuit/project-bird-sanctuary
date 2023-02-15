import "../styles/Cart.css";

const Cart = ({ cart, total, discount, handleDeleteClick, bonusItemsList }) => {
  return (
    <div className="Cart">
      <div>
        <h1>Cart</h1>
      </div>
      <div>
        <p>Discount: {discount}%</p>
      </div>
      <div>
        <h4>Total: ${cart.length >= 3 ? total * 0.9 : total}</h4>
      </div>
      <div>
        <ol>
          {cart.map((bird, index) => {
            return (
              <li key={index}>
                {bird.name} - ${bird.amount}
                <br />
                <br />
                <button onClick={() => handleDeleteClick(bird.id, index)}>Delete</button>
              </li>
            );
          })}
        </ol>
      </div>
      <div>
        <p>Your donation has qualified you for the following bonus.</p>
      </div>
      <div>
        <ul>
          {bonusItemsList.map((bonusItem, index) => {
            return <li key={index}>{bonusItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
