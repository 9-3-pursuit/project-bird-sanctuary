function Checkout({cart, setMyCart}) {
  


    function handleSubmit(event) {
        event.preventDefault();
       
        alert('You have adopted birds. Thank you!')
        event.target.firstname.value = ""
        event.target.lastname.value = ""
        event.target.email.value = ""
        event.target.zipcode.value = ""
        setMyCart({total: 0, discount: false, adopted:[]}) 
      
      }

      return(
        <div className="Checkout">
         <form onSubmit={handleSubmit}>
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
                        <input className="birdSubmit" type='submit' />
         </form>
         </div>
          
            
          
      );
    }
    
    export default Checkout;