function Checkout({cart, setMyCart}) {
  


    function handleSubmit(event) {
        event.preventDefault();
       if (cart.total !== 0) {
        alert('You have adopted birds. Thank you!')
        event.target.firstname.value = ""
        event.target.lastname.value = ""
        event.target.email.value = ""
        event.target.zipcode.value = ""
        setMyCart({total: 0, discount: false, adopted:[]}) 
       } else {
        alert("No Birds were adopted")
       }
      }

    return(
      <div className="Checkout">
       <form onSubmit={handleSubmit}>
        <h2>CheckOut</h2>
        <select>First Name</select>
        <input type="text" id="firstname" required></input>
        <select>Last Name</select>
        <input type="text" id="lastname" required></input>
        <select>Email</select>
        <input type="email"  id="email" required></input>
        <select>Zip Code</select>
        <input type="text" id="zipcode" required></input>
        <br></br>
        <input type="submit" />
       </form>
       </div>
        
          
        
    );
}

export default Checkout;