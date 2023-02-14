function Checkout({ setCartItems }) {
    const handleSubmit = (event) => {
      event.preventDefault();
      alert("You have adopted birds. Thank you!");
      setCartItems([]);
      event.target.reset();
    };
  
    return (
      <div className="Checkout">
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="First Name">First Name</label>
            <input type="text" name="First Name" />
          </div>
          <div>
            <label htmlFor="Last Name">Lastname</label>
            <input type="text" name="Last Name" />
          </div>
          <div>
            <label htmlFor="Email">Email</label>
            <input type="email" name="Email" />
          </div>
          <div>
            <label>Code</label>
            <input type="number" />
          </div>
          <input type="submit" value="SUBMIT" />
        </form>
      </div>
    );
  }
  export default Checkout;
  