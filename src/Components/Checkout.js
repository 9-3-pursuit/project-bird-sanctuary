import React from "react";
import "../App.css"


export default function Checkout({resetCart}) {
  return (
    <div className="aside Checkout">
      <aside>
        <h4>🐦➰Checkout➰🐦</h4>
        <form>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            // onChange={handleTextChange}
            // value=""
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            // onChange={handleTextChange}
            // value=""
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            // onChange={handleTextChange}
            // value=""
          />

          <label htmlFor="zipCode">Zip Code</label>
          <input
            id="zipCode"
            name="zipCode"
            type="text"
            // onChange={handeTextChange}
            // value=""
          />
            <br></br>
          <input
            id="submit"
            name="submit"
            type="submit"
            onClick={resetCart}
            // value=""
            />
        </form>
      </aside>
    </div>
  );
}
            
