import React from 'react';

const Checkout = () => {
  return (
    <div className="check-out">
      <form>
        <label>First Name</label>
        <input type="text"></input>
        <label>Last Name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="text"></input>
        <input type="submit" text="Submit"></input>
      </form>
    </div>
  );
};

export default Checkout;
