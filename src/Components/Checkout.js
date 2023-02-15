function Checkout({cart, setMyCart}) {
function BonusHandleSubmit(e) {
    e.preventDefault();
     if (cart.total !== 0) {
      alert('You have adopted birds. Thank you!')
      e.target.firstname.value = ""
      e.target.lastname.value = ""
      e.target.email.value = ""
      e.target.zipcode.value = ""
      setMyCart({total: 0, discount: false, adopted:[]}) 
     } else {
      alert("No Birds were adopted")
     }
    }

  return(
    <div className="Checkout">
     <form onSubmit={ BonusHandleSubmit}>
      <h2>CheckOut</h2>
      <label htmlFor="firstname">First Name</label>
                    <input type='firstName' id='firstname' name='firstname' required></input>
                <label htmlFor="lastname">Last Name</label>
                    <input type='lastName' id='lastname' name='lastname' required></input>
                <label htmlFor="email">Email</label>
                    <input type='email' id='email' name='email' required></input>
                <label htmlFor="zipcode">Zip Code</label>
                    <input type='zipCode' id='zipcode' name='zipcode' required></input>
                    <br></br>
                    <input type='submit' />
     </form>
     </div>
      
        
      
  );
}

export default Checkout;

