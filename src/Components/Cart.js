import React from "react";

class Cart extends React.Component {
  discountChecker() {
    const { chosenBirds } = this.props;
    return chosenBirds.length < 3 ? 0 : 10;
  }
  sumCart() {
    const { chosenBirds } = this.props;
    let sum = chosenBirds.reduce((acc, bird) => acc + bird.amount, 0);
    return sum * (1 - this.discountChecker() / 100);
  }
  qualifyingBonus() {
    const { bonusItems } = this.props;
    if (this.sumCart() >= 1000) {
      return bonusItems;
    } else if (this.sumCart() >= 500) {
      return bonusItems.slice(0, 3);
    } else if (this.sumCart() >= 300) {
      return bonusItems.slice(0, 2);
    } else if (this.sumCart() >= 100) {
      return bonusItems.slice(0, 1);
    } else {
      return [];
    }
  }
  render() {
    const { chosenBirds, removeFromCart } = this.props;
    return (
      <section className="Cart">
        <h3>Cart</h3>
        <h5>Discount: {this.discountChecker()}%</h5>
        <h4>Total: ${this.sumCart()}</h4>
        <ol>
          {chosenBirds.map((bird, idx) => {
            return (
              <li key={idx}>
                {bird.name} : ${bird.amount}
                <button type="submit" onClick={() => removeFromCart(bird)}>
                  Remove Bird
                </button>
              </li>
            );
          })}
        </ol>
        <p>Your donation has qualified you for the following Bonus</p>
        <ul>
          {this.qualifyingBonus().map((item, idx) => {
            return <li key={idx}>{item}</li>;
          })}
        </ul>
      </section>
    );
  }
}

export default Cart;
