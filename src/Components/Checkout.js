import React from "react";

class Checkout extends React.Component {
  render() {
    const { handleFormSubmit } = this.props;
    return (
      <div className="Checkout">
        <h4>Checkout</h4>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName"></input>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName"></input>
          <label htmlFor="email">Email Address</label>
          <input name="email" id="email" type="email"></input>
          <label htmlFor="zip">Zip Code</label>
          <input id="zip" name="zip" type="number"></input>
          <br></br>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Checkout;
